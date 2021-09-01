import React from 'react'
const Data=[
    {Id:1,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=sxtw6Zqg_jQfXMQZEzdNHsZpwvuPbxngNUdN0KFUIKSuqVYpyiSLKV1GhUKngAGjyQnUrhGTJPu5JuAu61YUYE8I6L5bQ9N8qd_LFZhHAo8RGC15xw-v_-BDergFRPohOBWOP3mRLDGkXijgeoM-LA2I8ye91xj0ytW0qbr75nRfp0a1mZUiM9P3kDlJ0UV55BN1sHg2gjGrTZ9B"},
    {Id:2,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=v9XNKnJpCMsSblVEdrogzAAuS5gSpfEB2JmoE_HYwqjZCCxHu0cQ3kXBAcrDwX-vz7375P_yeEPNEysg_BuDbJxSCmVis1gYSlmNOUmrnnTKK6TbCQyUy5oRFgws22p6UGfp8i8PjdcpPzEZsG1k6MwL1l53HJP84dSn6cy_-wa-iwtkCAz9QHORU-lSiKOKo396dVP7qO6N6Xxn"},
    {Id:3,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=qgSZ4gmjOVJrU9zdx--pSnC4e6iVhvDYAJlA2PFtBH_6aKi5kgk8IhD2-yuYWTRjM1L2f7ztJZsmPW0EAogeIMwVgclQzjeRjg-U2y5ET0SbK10ADMo1aK5qIcYFsqaALs3mej7w2KW2hyAov-6kKxVWQzV9p3gBpbZlOqXdaKrpu7h04XUqk6qdDAKX9r6TT7CmsoMXyi7WscOF"},
    {Id:4,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=CN2N7G1TPQBc4z2_KIxJjxk77EhUWUgWilR4DlvGx7cW7Oo7wfW6o_f42begk4oNBfPi_ZRMOnLhxXQbEfUlRZJMjWalEt3_MSRCqIrQcY96HNVUolrONwE6MjuE2j3CmOVrwjXGjYi3DZM9MctgRDWEl0Qnnxrj_ki7fjiX-XblW5L4dQafj4_MjNQ5jN-FSxnEZLSFkUAHyPcH"},
    {Id:5,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=g-Q1I3kF38Ts9Y0xXDiIR-9WUT8rsYm6XjYgTtMIG8e7raYMCISMxksviJ5MxwOZvZ5W_o5yZ3CbUzuE102KLrujibQDO6usWib_5xMU5vRLauVeMW5c2X3GI-roE463pSPexDVBjxwMMEs5DOZaGGGQjHrFpibxavbuYv784WF97RCMasXPxyLmIcU"},
    {Id:6,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=OdGLkjqXOcpEvTtwsTSEpeG18zR5V77wMhDb32im1dTVo1sFgihENC1I9k6X--dLRGNO3cS76bo7oOCF3eEPTQFGZz8GIQKr7MIAHLk2ND-DUU7uh9qFogbxkZtbEi8Hpt-SE2JEMevRaLPlDWl1kKu0yVh4ry8DoKxnsmyvTO_Xs4rB2S7nWHeQq_w"},
    {Id:7,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=oSU66Mkt4NNK3gTK4wkmA6ye2CKKcyovk3zmFTNWU5QxSPLW5ht63cY6MUJm54RebhKveMahfqbarEJIFFHnznu6NUkjOw3dBmKbASraZdlzFx-1Ydaa7oSUMLauP2uI4bgEs5LizesEtt1_gvJ68SDbFA8M4Q_IEYFNAgZCr6R9m2dGo6boH0kJ3yw"},
    {Id:8,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=hihAznDXnwASQJDtJrTqThmidYS8VoIiUYoTcKX2NVTg3enzPWf8U0LrRuZS0Utz3SVkJTi6Hl3vxIw7Doq4kVFeOZsPnCfhqHHkpIxcDuBvZcrXlPRbgFMcZ3OMal4zOsdyBTQEcBemYb-PmcY0B2Md6Idmd_4sMbsCFOQTDXUDXsjsAisT9WAlHhA"},
    {Id:9,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=D_rDuk0q_O6jjzNPBZq44JzBfx7jv09SA6LvDgdBBkDhtN_4rCynL3N2GOeDekM543gIxaQPWUAqFs0RknXjThn-IaJ7x7BJOl5PQn9GSDbvtlzJKBRT29zqxFyqSR53zreEm_m2XhTOjKX3TYPR8yaprHm7pDCziSJYjaFHldwF7EGuh7MDpubEJpU"},
    {Id:10,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=MULNl22y5itryL1p5sABoS9QDXiim6wpR8pCi5CCbU0fqHe7wtNvhq3mHf3Yuj8Rt63taumz_3HPnh6Hvcc3_PulKmuT9UITAUOkKZPejL1VE2wsf9gWeQcoB08danPwh9jzceupUi6_Z0HYFC0eW5tV0jhiZjcJyI6yu9REUjGiSs-8ERl1qnOiNuI"},
    {Id:11,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=1IaTtei9vYZWyk8i4dFN_nmnXDNYuIuwUWJKhvJHKlM0M9p0foDvdp6fG_ykdByvPlCOVRyMOAWYb8kRrAbecBHvQfkBb8KQB3_8xrh4GsoHbj8Jcz2Yol5aADnsrgNjeXq6E7-L9X2N2iJOPWEzyTlQiwtyi7ry_WHRvlpKL7THAmfqTf-43GMSmGHuM75IVQLi5t1F2XbrA11K"},    
    {Id:12,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=a7DYuNt_WYbBE2J8walCYm9pWE3e9gpYL0EImX7OQPxSCUQ88l7ObLfRiG6TQvmjLaD2RaTzd3riSq_AGnfXqlscoQR0cXoMMvQsVJLukY6bk5ppN6Hmwvf_Ilwb_KCW5mT7jWb2AHaxZbBUxc1KGyicsi2unx2pVu39aBshlj0cCYLcDg5579YDmtO7ID4cX5EyU0PPWgm6825x"},
    {Id:13,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=fF0NR5UE-NEPvDkL7x7zD8VTvMJ8DGwaVo_Wfc66r9fx5kpNdlDfleTSSyiuM0k0lDgbaL-x8nN2V6JWg-0WS000uhL_tYrWfFl9dYjpIknmk3a_glq02PLKFUqPzvG1y6TTRf_RKBbV8Ub_XRbsL2m4tCQ2BkZv-vyrA15kimqVUBaK69-wUIbAM_A"},
    {Id:14,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=rihVDAUiNfu6C0ltkT1Ht193zgH4GKloWwadKhPWkL8MQTnoNYQjlBps2xn5pKvWIkg-t4alz8RqL64bGh7TJrumj4BZVpVcawcnyOkJCmiKw5paD19RGDFtdUHmRS-CXI4b20lzKkyhta95vfvX2XlX-sf8zcYqY26XYVOWwlSsD0x9FvwI7AXQaaSH2dl1FMtPak8jAhRWkAYp"},
    {Id:15,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=EsOxepoPpS7Sa2JqpOwNOSZTvGR_-68yGFgdNibeVu0UTJegDKKm1HEWKPjX3uhxRNB3hv5by-lellrXxNYlnLCgGpvxyVbluupPqkzk45j8pLoUkGhVEzS_1PfvJlwPLnuEGc7GpXPCMgZtfmYc4mLxRfWFsnNzLgYnQyrDRmmbVZKtuGafGRvYafs"},
    {Id:16,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=Hg4yuJ4OHmZLdECSLY6OuuA9z0FuhusJx1VzbBVcbg2OY-EQ4YXDbPyWyz1EYB-KVyyfe6kIEUsgQCMnJ4A-UteNNyfmgiNoQnOFmNtWIbq_cA0-L1E9k5NXMWSbhw-LG3RCD9BCejt1QZ0c9ph1Tv4KKBWOV_5k38HIJ69iGm4L_xl4-58czcbQ7qA"},
    {Id:17,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=1k3_A7vSD_NEA4nG_A-pKe0BckO_FoVEikFIjdz4qomSIfyYKF4R5-XKTyRG6lXaOc2WMJYQCw2yIDg5ZVOwJ8QWoEaJvAI4PCW4zUL_9XL6Vn2lN-vnjljqO6qeGjHReA9LLNg0JZDz7GhG18UZbqRo61Hszb1d-gnolizEqVTKLnNE25rOPZkJn2yD_oyyFlpTdjWAY2VHOASc"},
    {Id:18,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=0BF8VamRNzGlIawLmwQo7bQSzVuYw3plQCVVzIUg6Z585wA7TghJ6XhlImOlN0AtWnDkduvtrMeUWr_aOQbrgZp3NAA73VDtuAW7ufWV4HCSKWYog4sgrgzDzINMaRTszW1ZwM5oYRGM8rwzHFhh6p2yHWXDn61ICeiCUFNXJGODf3chdosf_dTjwKA"},
    {Id:19,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=aYwOD9FsXLGd8TgUwrWzrxlQdN2dUDcVWyzRRY6qcDojzt6WaMtf4a--0HrVVHsr3n9zpo7hOk70kAy1FGFaGUOvsph5IXI1SA0Rt_uu-TmV36WqBupKTy6CJCiH2IGr8HBr1WEaHppuGv8iJTJVYKj8T4vYWFFry1rDpyesFj9d5Zz7Bd8aZOR0y0l35B67x7KelUqHYQy5xMfC"},
    {Id:20,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=1-JXXOEa0ceko9Tm-ghV1zPAwnvSKGtw8xpmqoF7TaMwr9a9ktFD8sUbNAdkPSm0j3CVRXZTKDku_uJynAKKqBnSb4sLTgRL-kjg6uojnl9Q30pDwtpDC-1d4WiUNK743raZR8v84g4vfgbna8UG8TTNRUcNOMRAB9q48bHya51G_7UAbf53X_BIU40"},
    {Id:21,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=ieUN-AUBLFelo03dNm0YwyoBY7TBJJd29bgkVmRV45E-UdFIP523x_Doi3k8WOeIsUNWnXwiVSy8MPzB08ffooAl-XgUWkI9x-yZM9ylR8CKGozU-SmSXJtdK7EFlPsnPjJITFpWufaBuyikHNxpHUZbsAq4N5wDhXLverdwNzsKBknnKLb-BF-qiIc"},
    {Id:22,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=Nw2HYcBACI41v5360RKyTTsWG_vTG99Vd8BXkq3Pcfng3wDKfKaG13QmOaQWKd7tTVfooFLvBrvA26iJGKgf3ZuwLJLtU2y_vXpuiChqAUlumI58VbFbB9U-iY4prCg9ZwhTbmEwQgKNIQWjw8IZ4fRkMjKJaY1PHjZzje6NVpuqcFFIoPacAapCriA"},
    {Id:23,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=8HNtXL9QrWdGiAUzgx0oNOJj9EYvGMBca1sj1HSGhqi_-rETudXnn3LK2aifXo46dbsEohNyeNYvQqHKFOYbzz1VJby4jqWRFNX6xB1tJzH-NTAgj2pEx1Cs3jtNW1Vf8K0GV8JIw_wleqU5Rk6_EDdjThcCANgBpp31xR8NWNMJZWQxD_7H8QNQAkc"},
    {Id:24,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=UgFmv0pMEqI75V2HdW5WMgcdn6dSeslwCYvOvotCV_-fVmXH5450mVMhLuq4Rp1ytb40rF3zKuZ8SIDGr3bCTHbwLZmzOI9mOYMDGuXKZuXsDgf2tVxGcKrRMttfOhmzYW5wxMKC-pOnj2v3sVvkN-Pw70kWjsCsXcuBSKufNRc-uC65a2_4dmGtDuXPrqegMuEhKhQP8kcHdO0r"},
    {Id:25,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=vo64GxU8YsKEPyP1IOy9kqPhxW4RAPBkN2tT8WdI2UnX72byi3OR3s3oXSVNXPdWhqaCkw4rGhXlFFw2sHWbyLNF1UwbMmOsbrVchu7y345CS7rzVbn4P_R9ZKQLr0Falwdd3k-TCRCE6d_spP-TPp8cz8aqvcu8h-wCvP4u6cMK8GyW81DPQGIvCAs"},
    {Id:26,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=ALFMz2JQ_u4eLTzLJNvmhADFFwv1ZG7PMHXh1fTqQQxLHG-3sLhaos9xepBkw6Y6QU_4U3b1gX38KQHz04DEdCisKeKa21BRF4qwTakGpFpUvl4WUZ2FJt3TLyHYDKq8g5HBMnuu_ROBO0lATlAA7DRiAn0XQzc-QlgM4_AB05dKm44G6o3BvVTLPRHmi34d27NcklMacehuxJci"},
    {Id:27,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=NfOX0HumX4n1eQhNiS3ruvsexniIo5CeII6xJBkSzRkP5JQevVU5BTsMiX3wQoTxXka2oPBvhNQN0edfT_KsuRiT7RYHhh6aLm_KLJmxbvBWW67rNg4fw1KmzplmPPj7Q7jvH-P_ul2S998H8ifMSDrUbtIexQwWX854p5fCp0v8IT7JnXAAvwj86RAr1qkhlBN_h02lgLriNAlL"},
    {Id:28,Name:"Flower",Image:"https://fsa.zobj.net/crop.php?r=h99sdDkzFwGpwBxsOp8snsr_2zjKmygqCP9j2H9bUEhs1OVZ6wcxJ1FCMZVVmlIGt81gDJhFULIvwMJLKXgxu-j9_uvtHDPxqVcCvdRXfGCF5vWOGHdvbaXL2Q3PVdGC7upasT29Ksh1x8600noklmz3WQYHZOtK0RSPkzrXmbxmOYg7E6ENyfBM4oof6KCoAfwFJ38XQml6u5w2"},
    {Id:29,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=c17V-SmdljiMtyUmJ0pjuMMfFqEf3LhCWI1av9uJ1dX6kIJHmm9vt9rnJ45MRMkmhDLF13V97X4Fjr3IC1ItTxkFkXu8yxuJMeHQWlr9AGsfU7M15cpZX_d_YKoxD4nlcEXKyODq9OFkmXUDYLy9NUpQDiQHC1RbjuRPyFGq2eGzyYda6y1ZFxv8URafZoXVH5ta_RhzmalY4lhe"},
    {Id:30,Name:"Flower",Image:"https://fsb.zobj.net/crop.php?r=pF8fUkfaLjSiDaA_oTjwq4GIfYGxRVvbyqXppR1rT-LpJVT4HWh5nu62YdFIi4uIi0HusRg9vFKChkD3crhH30xyoBABK--f5eBOJE1idDSIJULWEaWCyzzevy0sXosvIaDvcFIBNkWFB4rY5MpUyTAJJLYDHA1G4VccPBiogQbbi4QBoVaMf-ZWb6o"}
]

function Flower() {
    return (
        <>
        <div className="img-item">
            {
                Data.map(item=>{
                    return(
<div className="img-details">
                         <img src={item.Image} alt={item.Id} />   
                         <p className="img-name">{item.Name}</p>                   
                         </div>
                    )
                })
              }
        </div>
        </>
    )
}

export default Flower
