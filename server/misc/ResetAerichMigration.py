#!/usr/bin/env python3

# Usage: pipenv run python -m misc.ResetAerichMigration

import asyncio
from aerich import Command
from tortoise import Tortoise

from app.constants import DATABASE_CONFIG


async def main():

    await Tortoise.init(config=DATABASE_CONFIG)
    await Tortoise.generate_schemas()
    conn = Tortoise.get_connection('default')

    # Aerich のマイグレーション管理用テーブルを削除
    print('Deleting Aerich migration table...')
    await conn.execute_script('DROP TABLE IF EXISTS "aerich";')
    await Tortoise.close_connections()
    print('Done.')

    # 最初からマイグレーションを実行し直す
    print('Running first Aerich migration...')
    command = Command(tortoise_config=DATABASE_CONFIG, app='models', location='./app/migrations/')
    await command.init()
    await command.upgrade(run_in_transaction=True)
    await Tortoise.close_connections()
    print('Done.')

if __name__ == '__main__':
    asyncio.run(main())
