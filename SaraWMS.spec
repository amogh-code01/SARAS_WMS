# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['server_run.py'],
    pathex=[],
    binaries=[],
    datas=[('templates', 'templates'), ('static', 'static'), ('uploads', 'uploads'), ('wms_sara.db', '.'), ('schema.sql', '.')],
    hiddenimports=[
        'flask_socketio',
        'socketio',
        'engineio',
        'engineio.async_drivers',
        'engineio.async_drivers.threading',
        'simple_websocket',
        'bidict',
        'werkzeug.security',
        'werkzeug.utils',
    ],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='SaraWMS',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
coll = COLLECT(
    exe,
    a.binaries,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='SaraWMS',
)
