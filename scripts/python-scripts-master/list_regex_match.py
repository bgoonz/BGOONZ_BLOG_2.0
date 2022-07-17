# -*- coding: utf-8 -*-
"""
Created on Fri Jan 12 18:08:44 2018

@author: fgrimps
"""
import re

text = {
    '"version_name"': '"8.5.2"',
    '"abi"': '"arm64-v8a"',
    '"x_dpi"': "515.1539916992188",
    '"environment"': '{"sdk_version"',
    '"time_zone"': '"America\\/Wash"',
    '"user"': "{}}",
    '"density_default"': "560}}",
    '"resolution_width"': "1440",
    '"package_name"': '"com.okcupid.okcupid"',
    '"d44bcbfb-873454-4917-9e02-2066d6605d9f"': '{"language"',
    '"country"': '"US"}',
    '"now"': "1.515384841291E9",
    '{"extras"': '{"sessions"',
    '"device"': '{"android_version"',
    '"y_dpi"': "37abc5afce16xxx",
    '"model"': '"Nexus 6P"',
    '"new"': "true}]",
    '"only_respond_with"': """["triggers"]}
0\r
\r
""",
    '"start_time"': "1.51538484115E9",
    '"version_code"': "1057",
    '"-104.99875"': '"0"',
    '"no_acks"': "true}",
    '"display"': '{"resolution_height"',
}


Keywords = [
    "37abc5afce16xxx",
    "867686022684243",
    "ffffffff-f336-7a7a-0f06-65f40033c587",
    "long",
    "Lat",
    "uuid",
    "WIFI",
    "advertiser",
    "d44bcbfb-873454-4917-9e02-2066d6605d9f",
    "deviceFinger",
    "medialink",
    "Huawei",
    "Andriod",
    "US",
    "local_ip",
    "Nexus",
    "android2.10.3",
    "WIFI",
    "operator",
    "carrier",
    "angler",
    "MMB29M",
    "-104.99875",
]

for key, values1 in text.items():
    for x in Keywords:
        pattern = ".*" + str(x) + ".*"
        if re.findall(pattern, str(values1), re.M):
            print("Match")
            print(x)
        # else:
        #    print('Not Match')
