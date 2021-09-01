import React from 'react'

const Data=[
    {Id:1,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=gyIua1t0FC66CJbAKSsiyBL07ekwd4h-lJRQ9d9VvDBm572NuG9e8lG6IOwg9oGEA2bY0NqG7fdMK4yJmQnvp1APq5bSg7b4BQbpegKj9XmCdSh5-pex5xhyuNwucB_Z5zeZ_A-QEhwJIHLQJ-1Qbmba8uor_F2OOE4ZE08WNbMFqQf7SYIKsf8dmWLZoNvpP0RGdE4hJQ8HaP9Z"},
    {Id:2,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=aXMpl7KfcQjoumzhegkHLuQbQOP6AcKAZQJaMCb0fNna2s3WtUr3j_3m-_BE8ec4dhMOPcno4gCRj9MeJj0WTxtTx4dJsUQdfM5na5MLyoa2LhGznV0-rvpI4GP1_GpMA3khX3RI_GtPUQSYTuQ1U2Q-ZmqB61-3vB_sJuTS2yEu5j2p6rltXbPc254"},
    {Id:3,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=eIhby96c8GQlymr3sQWP2zB8qebZEnx_DyISRtiKrPDzy6-dA9-Va32sk8ZHea6_lFPJKF9Aw4KAOD9U-2YVpSy7WuL6xT_EZAvM43TdYwMQFSXiI_6lEOpACnB4IpepcDvbCHfnN5yho_fb-K48d_agtPpoH3SsJb9YsiUMXsUuel5I7WL8IGuFpDo"},
    {Id:4,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=CSLSlQ85ZW_xG76dlidS3vB6CzPpARd48-5V0ubwBp-fyQuh41fqc4qi20REqbrg7EDxrHMf0a9W92jxuwXZDARY-K7SP5VRT7dgftMUXjcb8uNZzm24cg_QVDoy0vN3sjAMBzCP-QmEAl-DBbTro-gmYqa9TaNI9XZ_gMBxTRJ6FQdYfkFP6c_i12A"},
    {Id:5,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=YXbzH3UkZF4APChLc9n0Z0cdtVOf3kKXCHmayDsfwDGXy9HNY-qIdtxjfBoSrdrkh3k0AQ8ywcrX0yAgdYMB-49zxNzrC4SQjpeWME6LrTG0Yeu_Z1ZnUX1OAylBwAKAl-JtPGQNk5Cpiw4zEMP2-NCS7ZgpUOyNcCu1bfahwd38mbxGplfg2LWJWEo"},
    {Id:6,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=HJsoZ9hVxL_ubYL8FOKIRsst-SNvHqBQGUObjdX8mpt9meLJ2byoY_DYcV4M8g_VOn-lWilRNkAHduuJsjHi1L4fUDSj-8bL1A418gl7AMLhv2yDfpBW95KObBwxQ4jRGzzE5MOq8LbgJwPo5AhmH44cCyjgUqlSSMCDBi1Nu3I103zYlgXYmTTc4Jg"},
    {Id:7,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=C3tMNgsRQHWOR2MNl5SSGmvAfQA4JOa-tZoaF17CLZrH9JCE8z7QjrWhP22b4KRFvgurJfcUkUHyohqiQI1Q-FGsDWHXcYOnYi2ULAUHg_N57RDX3wHA_okK5UKSgSaAjv-o_J3b_msvhQSFNRFfsbuiuecAui9QE9jisOyvE3LsM-PSkQKybUhLuLE"},
    {Id:8,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=jar96O5EX3u96mYuI7qp_8mNi-wVS2p5fyOaCUdcPQ3vubHsRZ9iqTakVX8NDp7rmd_vaOpk5xcKEkq0JWf4xcH5Tu5tWUSxAuMVHsZKXhl5vqoOSO4KVs7YV439ysmXrt0L4YI4R7KHcujqps1WoucwiuM44kdzV7WiHFhqSuXsEou1NDQBYK2D5OY"},
    {Id:9,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=XpeenjQV6ajuvxyXzP_-4qmI2LOG44WQwrjwbW48cvOeXE7G01_ehoqpizzudZXS4Vnhrd-GzAYVKjjHajgSLlx50NumEQk3W6sMY5eDNXHFBFhD01NWtp7YNVTlaC9sACq_h131qSOZnjfKX22Vin0SEXi77EIkgvquHd-nu5PJywViXT2AH49QMhFFeL7LQ1lZZv0JvA3xkHrY"},
    {Id:10,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=GV2kno_CwfHvV0aZzSKV8A_8HOEtkkV4ruWNthsR6GJSYPpWWV1CPJ-YC76gRqymHmXCaYjrckcr_0cHTuFXML5C07Xbjr7ET6dcnYXwgTUjy15Mfq4JjP2YdIK8xwWK7IXQKf1abMYnll3jhIIIG23kPdXA5Wa9H7veVAiwpFcMljoDgc8ur77DiOI"},
    {Id:11,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=5y1pGZdxS5bp6n5bGgmO50l1bZAZcawAIgXamF7KYJyMRupUxxN-ZPTtSuDb_46o0MTxWuMwssWMIcQgdCfuk0Ewan3FXFKZl2OI6HxX3TwSZMoj-M2m1krtsgkYaeDCRQ0VdJWCMkpgyaorEwREhU9IIhM4WoPAxQ1K9O10r0QXhc3evVPyUCBt9Gs"},
    {Id:12,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=nuMHLOhb9V4SzxeqMmv4hhBxRJLJ6plFLXYDjenzICG52zkgTjvXBrgoyggPxNoktNKF86T92NgtdjgE3TRq9_2KqL417AazDV_ury1fjxMF20JjpHUvMMX6C6FGsQxyWMfSATD4pihI-wPMc4ry4XUI15b-yI82OS8O2U1-eE9dm4HKD_8CqhAxhz8r0B_I_uJVwI0T949ja-QG"},
    {Id:13,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=aXGaJmllO8AMphhvfOjB1DGWu91-H_GA7lcqh-VcOw4J1qMIamoGEJL2Cg5LRvON4Wxlx_3KUPLCLrYhrXp6I79qvJBRLQODZpubm3d306mxJNcC6yrz2sw16kPertIYBE8_lbzeOmQVxOa7v2lYvRIeHkNzX0WYhh-f7vXZ2q2qG3bqinTbPAs_6dZIpieg7sL4iWL6aJAHDD86"},
    {Id:14,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=93KLc4DlM91Qlqwy5oLOAca3pmKzR_4MUrmu5wwVbTj400smfC1UtvEsu0wehnuz8VandOmlY_PqoJiIA-ISQB-NNfDPF0yoMKuFqSHUEHhGbKPZFDwjnVR5r4o615pav-SwdGgpzcw8SF_xe9kL9gWJOrv_BJSCigdvR1oV1918cGFkMCvWBUnP5yvVVaMOAlQ2io1jyja_7CZh"},
    {Id:15,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=m-lza72xHd9nd1fJAwOH6jJRth6GMxmskgp59dcy9IBlYfAwanLhr3OjtCGGtp4i-wddrEW9g4I2r0HDFPwQt_Fw7gvs3QPTabPsjRMv44nyRocnIU1PlWBwC4eeUEuYUDmdvpu7mC_wVuEZL4xsP5I0-MuVM2nYEBk3-uPTddDpff7XmLXlbP5U39E"},
    {Id:16,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=atPjHlus3I1nBZWVYbZLFXpsYRu9KYAJWV44ZYyA9gO7pu2c2B_mMwSAx3Rr5l1_fFdBjZn7lcie6yKgaa64lTevdlImg4W7_lmtirf4vcH4LH6FaYQkwd4isUAVtgQ1CBs2W7Y4bFAemHjKOcl02sUbMZoHphw4YQMFeEiQbXIGTasGjSoGJUlH33fwpuNZx1MSkYpYGFb_C0zW"},
    {Id:17,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=W946rSuOMz27kq2P6LwlpslO-vqncL1nt6MiW-tWQTPRfwr0yLck8dcWcDMb_knMvWh-vSy7szgDHdb1S8KJd9ySZbsQV4t5TORZaaaR6g1BqqaRBphP0OLKSxccynfoNbNnxzm1g5d_CfP0dBSelnUjG4f2mgnDi-2zZ9CA28HVX_y4ZVB0dau_I6buQaxl3pm36DPZPe-BUKlV"},
    {Id:18,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=ffqhTotoHYuvLohcLN6yJjmkvgKt6bJyvZf0YY2vgTk8JSa5XbpmYdHP3XsaCpY3tEYiiCHWz1UptSTo6WDmq0MtjjH0HRcNo7xa08Cd6Cz85jUkssXLOsOT7RR3TOEaZ8MASCiviACw_ZGArE1h1vbM_41g3Qu_o9-VKegfAfVB_bTuLnJ-x3lTahIt3sweKeW43Ap0IY-AapyW"},
    {Id:19,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=rQFp9Cy6c3vUbYue2DRe_mnOi-ecXwWJJxkVUeBZ9AAMKxUZbE_x6PGMWZLjOLgKTjTBIikJr-rASTkTnTtZTevxChUlkG63qhXq-q5Jhq2I9HEgC7srVEtnnz_vZlAz4ZlRbJW8y_cTkmI0llAm4wEnG_JbRzDBGfTt5cHwVDtzxM4tzdtBYfqgNpgduPzlof5ATmr8VbHhjjW5"},
    {Id:20,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=uch_PKZhjy0FQxkdiIve1LiYR5kfxxF_u9At9cIU_BNVln6jYWDW7B2NXcexVJjZFS2DzELcVVzFObEzeb-yB39OMPWMPnZXrE9nEiKUxYACLNJBCcFpl4JfAr5hVNdrzSD7jOjsWJSvYgduLpIp9lDY02-RfBAG8ilKvXkFPOlIJ7e_aZZxHe2V93E"},
    {Id:21,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=ngi-gu2Q_VNxxjwL6Y22OojpEY7NyUNmaTO1NyN7qa9FSCpk6LUoghHDKqvFrTlXhNTn2GA79brFeh5LVl9F_tFsJ6KRharzk4NT_L5ualdGmpWNyAsUQ_5zLmgsqXq2r3-hkdP9d5NHdWcy3Hqv_kNxxxdBQj8FOrd9sR5i6mSQwl3QPhJOT89p4v2W1Rgx0khH78pE5QywsDFn"},
    {Id:22,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=afkeJP_bZ15eEWl8El9MKcRVx6noXXqIDCp5i2RQG_zdFEgcJ9XRCSkmVP82lUixKTH_1gJb8WMfV87xpGu_Ct3--yOKEOe_RTwdzaOjezA7mrJtsMOvoLTxdzDR76Sphz_HRAMzs16LEJyNYoJYH5fBJGfHmdDNU-PqEsPqRnTNtEQkCe-zimIcxsE"},
    {Id:23,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=N_PW-s5Y5sluposyQBJAea_cGS4Y_mp7t5AarmAEVBDn2-9ZexeIUoZ99WsSYyAYZJ_i783y8k0pcAL63xCCN0doVYN2TZz2dttM8mLMyOmlDOEmWF3bjUlzriax2nFaroB2u2AUMoxPynhTLelTCJjvgCr1cozG3kmI4fvQPf1hRnITuU7Rekz0R4A"},
    {Id:24,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=TcC2tGkIxD5YoSD6mlWzt3jrXlwMck7a7wX2dk1OL92_21poHR3fkGmYqUA3y6qoTMPU39JXrQRapsC6sPw00Y2cqJ3ZuOP_W-zLhTvMPU3FLKm_OpzDHYLxmNSX5V3eO8TsK5hLEluMynqczviefHw_jm_cquSqu8jkENZTkuOR_VTVEXrfxzArPyw"},
    {Id:25,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=WNU3EE0Z4sTgDWS_Oj5zkun1rFGvnmTmytohf7Vvt4aJ4MYE4biV9DU3fikqoqHRCqKMIKINWtmdHHn3hp9lpfpU0RLxicv_TPIGj9SPbueaI8QzRP-ElIW0Q5Y5GWMVmTI9hhSDKBJzbaP4DGuHFBA4nozhhZg8ssmmNHZVYuAHHuOjhiChiBtmXP5Xd0b_iRqMgY0ottG5ZZjP"},
    {Id:26,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=g4nMGCLUgPr7sN4xGzpcCvoEyiKLB935HuKvcQZIOj81Jj8bWinyP5bLnvuhIoqcGvf__tLpMXaNonl-jgmp9BGBJdlbJh2jzfajug9q0AtiBi3MbmIozr-FdDlm3e4uUNr65UB1ez3UYu7GARuUe2zNov4q2juD08z7KcIO73x8ql65zgaI_8nhtsbgKMMTiAADSWzc4-maCb8i"},
    {Id:27,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=cYSbwJeBiV5nJc889JdRUHiS4zFtkcAQq_KU-cAAPHSzTxS8Qp6P_3gvxn5Oftwoaj3qCeIm1qph4DiFi2NPZ0WbIt7n-0f8LqQVl88qdUI8E03LdD-vrX4ItG3OdWyobhYmEiGw12899L9WLOdFYMZtTo7-XhHHUgdajKPpibfiGp7u_tx1RkNyFic"},
    {Id:28,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=G-J4F8clapdQJ8EaUzVcoUhRvd7TD95IxEnaEoRk36nOtM_gTLZxqtVhSwUBsgkrwNF8mpP67BSu2l8WbHVHlWm2R8WL5WlC4EvQaGuiUqNGjnfj3joD-n_QscnXyKu8o-WgcGZdkVUW4B5h5tT0XTF23BtszXv_7rcP8-usD5ZzfAEPQNzITLHPUtnW12cebakez6bQoLAWJibb"},
    {Id:29,Name:"Birds",Image:"https://fsa.zobj.net/crop.php?r=qgX3g1bxCJAykQUPM907AIiv5mr-JsYrFJSnpVxu5T7_wMpdZh35CQ__gwOHewVqkV0SE2KGPajeMXSmjxmVgerEZw0sjJXiQBXVpQYNeYZPbEGc7sIChbzr9J-4LAguNE2njS5ASvAH_QaCm6oCtsowZX00z8qXwxLH8deY4P52ntrW64DgoSmgPYDfwPDK-7kVGOgoKVTZmjLX"},
    {Id:29,Name:"Birds",Image:"https://fsb.zobj.net/crop.php?r=YS6pdv7JHwKymczaOtmUtwQda1Tbatc_PQ4sLWKjLcMBEnT21dJeRXxcMr79ronKsInvrvUtpk7g6viCxvMOMS714Y9RYcTfA_0XL0NYDUIaH9EUTjw8CyrcIhUAj6EbIeJE3a5N4wfdj7a992lmAolv0EF4VgFOPOWu4aeZH1hiViNwmNl4n47lsys"}

]

function Birds() {
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

export default Birds;
