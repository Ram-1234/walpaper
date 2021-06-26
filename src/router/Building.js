import React from 'react'
const Data=[
    {Id:1,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=zNs8pA0tSN3Wjkswae3cFyYRDEIhQWvA750_mkdFUtg4HqrOO4wTQ6-mj2qf1G5v10uE4TGisnJJp3ajp9_2WLniiXWSDC92K8Io7jQ1mt3-cY_mhMFxzsPDqJkkoY4tbK50Y1KVGP4BXGQSSqBon2qHkj4k6SOEuTdY5uRLIxDthms7zjwITjOwqvtWgcXnNIPNPCXQq_P4HdP5"},
    {Id:2,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=Vwra5FKa_6Inm4F3u-P4at50OZb44frzR7AAeFm0iTp0rDpBaj5-LnQY2S07iiP3WidYfsUX-HmD2yxyhyUJfdD45z5GebywxQJG5InO5PeLgHBntoYw0x-IA56Zsz6qlii6mfRqhfGbmHEzJ9PY6GAnBaFuoof3j_bzHuAoRSub8OM6OrYtDOwJXRhN-4yPawgH_NKsEk60gE30"},
    {Id:3,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=0Da8f6k1z0sPGE9Cg5uKpfPvAm7t2xXtV-hYheWyYz4dTBFbg13Twb1LMydKLPZ8Q1P-QlCo-OnntVYk6Owlh1L978eENI2ZpvIYXQrZQTURG0Qqhc78jMSak6xB3CuzZS2RBJFA762VWMwfjeS9dLURCWSrZJVDUsOJHxaHr0V973mGCkhv-WYpqq4"},
    {Id:4,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=5ps34VCEcPoWWf5L3Uiu9d3IZXGFpRqnpBdN3C00V-GbQtfElzz9MyYRhGNlxqW0bS4E8fWxHGERPTxYd2lu0RcZOSEHAuPar1TdxzTVtjfsRQ23FxVcLg47z4h6wDCq3MtyScpXeBuM6qTw6KGoY8QODL_LtiWErljqz43NtWKbwehZ9TBKjdCXjELT7GYMdQ6GumYeg7kOM9nd"},
    {Id:5,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=LiYovWf5ynr6uMzHxBEHktf6bg1spcZFDQUY4U3-hYZt4oiyl30wW-l0hzahhcFrxKnqYxSTQIBEQPAIH_mEc5jgcMeEGMBUcthIOebXeawXlZB36RPxUdEHHjQZHHBL0P9F_v7pikmm_v_0Tih_Viibvr6CFlZloh9harTulJjrG03lqVklimnIcQE"},
    {Id:4,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=-kqUj_KqajA4zFXbtQH_rbemQhGSdVR_ShMUPUYIIMcNy1ESU5453rEp4Ah77DAZ1rQT9BoacCkSuzEHPj9X-GfLjSJEN5rs8uDIYDwlX59ZLxCaxa_nFmdPy_DhwuZTV3fctdaWWS8VUGdXArP5Pg16rnqIms_PJKqj0IvsFJnyyri2JMmjueLBhRASq6vxN_g7IvGbgNFGTyIA"},
    {Id:6,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=w19YPCApGQS8PXAy0D01Ft3kOKckTEA_MeUPU8sbxEkMpbRDI8FvJo0q2aeWVBC5u3EY-oeznZkciQhtdU50fhBugOARg-2_tFlMrh7IVZ9fomABVuHZXPq_E8a6INMnd1SH4GsMzn7_6shbBCnbcRoCse9zujduLeelQsN0bOAAmWhk5uRJmIJy3j4"},
    {Id:7,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=5DxrMmXaQAPwlCh-P6mVvOBf7qlruYit9h5qMSOcDHGO1ulXhMRdX80zCJFTQJBSq7FIkz8CHcW0lUHjj1wgmC389mmMFEDZeaQA3xN-7ycXBGTNGH_9IcmKWjlB--yxdT0P645_0tMneTLYSUf1JjVrMmmAKrVCUNxGv_LR0SPK-HiiXh-wyXt_4vA"},
    {Id:8,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=xfqE6zX6O7rfzIqBGotZbwN3MSVzWtsrH3_Brd_Pzx5n-yLB7zdkQdiEdlY499Ibn6qkhS2BOfX8VjfMDspiK0sk7cYLrVc81Y-KueV5i9GDQMxtBo-fcPBnBypzAI-ER0i2MAvRwYZ6WO8zttCnF2-fcMJk9At134_zXefR-aorOQp9OWFqdBYOK31WAMLjdxRWI9aRCylFxrSE"},
    {Id:9,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=jCmE6HN-DCn4grOMRfpmqd3qbBwd5wxJPqnmDmfq9YwkzcRyn2ej_hFiHv3-o-Wie_Qwy8u_epSbLL35ilcH5vjIa6ms2KBSCHPvXkVUEIwOKKoPuRyNz_0R_3K8zJGOHaHKzRuDS3C-CEtwjChs-nCtSD8rtmYpUva7u9nZEI15dYrp6cZDDEGovinGSgHdJrTwnz_-jX3YZrxw"},
    {Id:10,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=Gtj7w0vlu5MarXj-7p3PzVx7p7o5W7savysvLaN2eC2jGfJsEi3vc9qEPDQqa2fgSINaTm_EkQ44OGezOuaHCei49j2dPh5jQOe8VICTCkmweE2XJ1x6v-8_lyPj2HCOXK3nJpM7ESPKuHT_vsoe0Lq7Lff-vf4Pke7E0uz9TTTuFXFwZJHvLZx-6me1Yeifaw0qpzWPgKUUNJKV"},
    {Id:11,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=i_5VBAysaJKYjgSfeXhH0np7SVarNWjE8bO8BvSVmyRdiPenQuuMZzH3c0VUAZ9BAxp0TqxK5351mC1vvQaOieMRaLZ7h0AqOjA_uYhZJt0B3uBWAisULNsflzPDRCPRTq88Q9X21Cd8bNE6Nel1_bq0jcsrPuBWugJ7PAJpusPiK1jCnic44COtKKNum6FPanjuTef1ElG6eogt"},
    {Id:12,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=z8Ui1BRS-C1g0GQtw_zlpwYofyDMOFwwrcr_Qqg0FjD2sA7pBix29uG23OgpXOVrrWYqzTxk87HljGXtD9oqIqXSucbogOZyu1rpW5IiG3xbtm8kWrFj5jEtb7fRFW6enMpgkuA4WX2YLxWUJBMY7S1rOoVIO_wUS6ffb5YImOE655p-iFdrp1PsokA"},
    {Id:13,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=upqJNQPlGHkXqA8l46QE0KibWBysuNIR4G3fEgo1OqDA1MzKfyAsgjB7KKKlzByXnrQOkJgPwJ0pL7YVnZmjVMzydQz-bJpQl5c7Wu8fqb9NXJlxXMMVJur1DpLEAoqrQXYE3KDVijh9-8QZsL1aWABZEKE_ff3mGdjDOx_8bAzNXqlvXm-JP_4YEw8"},
    {Id:14,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=Ws--spejAKgPS3O9l5vlYUqv5IcG5Cwk1U7UsZK38Kc-HjYfkx9i4NZh-lkLP4EwI1d9tlKDeGPnrksc6K-CGafBYaPYmxMaBUo5Gc0uMmLnLMoKcTr94PNd5ox6pS1soMqjmbBrReoBKWN9da7-zhXSBmFCCLwrKXrXCWQo0vxD4VBkRknPIx0ieLSUVF73HI3cABwWhYsD98kw"},
    {Id:15,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=lUbfu50WxDszWhKXtrG_OuKWEgcBOBwK76QTj4cz9WF3FU0yQ0Zh4W0GP7ufQ2RkaVv8LILD3toXRmqd0ZVNGnF5eOT6khUew78UjcTYRfN2kTWSPhLB4UxxL4rx8pY9aTSEch3ESadD3dYZfsFtljuFi-TH9DYK7b3jCUfIpHetbIDFIQlMoY4K91C0IBxLRS-5ebmyKMfsIouP"},
    {Id:16,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=LjG-sq3E2-gkg-XCUJm5SQioD2ys3KOPKjqz5ivc1xjbqgS2FwmWcm8-dNLE34USscxz4rzetk57vLSjF5cNYcjG-bKVODubMb-odYr-O1j5-eryXd7nJj_tEAiiYv_ZTrI-TlcgI6V-xwmYGOLWqhkjUJk-PrFfl1uGunlB_ihlZxiU8aUcw2SWEic"},
    {Id:17,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=eufUwItv1HWYp5yoKIcoWwsfraoK-YVx96RjiVQIW_j_MiMDhTbMlvz_ew7LncwgMVNcIK4bKO7L4IE7Ihr9YWDNA7DB26Otq7473Nk4qmMh2Ud6rsfFvPZ-KRp8PD8Pq5_MZpds2DMHAS3UkjIh1PLcF6pwLM3ZSSJK5NmzsXv7BHROom8644_TbG-5ef3IHVRUPY2m3xvEY_SF"},
    {Id:18,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=NOUYaAkiFLbXhf6W10Bk4HhiiramYRjCCs9Y6pGWuRRhupbzpPswaXdRGULzzn1S7iPc6NmZCm9Y4DIJ-L2WWYp2EmwCiD0K8wgmks-4L4zkfxvW72rL02YKW4oIT6nrOGC2AjPKyYd_I7VXjou-1jBUI869gHM1X6VquD15YMB--WpoFMGx5x1_eUk"},
    {Id:19,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=6JZ0vbUSewOj-6MPTro5pvXFmrPhB9cqEOtrezdmjfe4MsO2cvGL8OaVe6wGxoI3oRaM0DFcj5J067IZqJEKEoSnz6wwwdNiA4Rd6jUBZLpnZeHFqNE8V4vZiS4uu0Rm35o2I-GWuvKYuHQ2msL31ticTLqFfAzmYALfy-1QPPbvjfpbRWSIYgK34BE"},
    {Id:20,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=LA7mgCeZVES7DApKA5iLjNI8oX7I6TwtbyIH93fYsuq-3964tp5H8m94losOCzJikDik9gUXmE5jdTpIKRA7YGU1Ah_GtDtH7QwL-g6kIqblrcJvFqyWEJvVpkSBErrJ0qRvCEvRtixREr7Qqq-dPWtoYlGAn3MwDtD7pAzy7JQYD8VMHWyqDgsRqxqz5Alt0GZpN_ECQL_py8zL"},
    {Id:21,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=uaPPrgcYKRr8DbnPl_jKOvn9zvcw6EK8rJquQNgqvE-xb1zBVwwr6pNLyXBfN9WuXvmtDKZkktOIVV-LxT8kLpKV0dlv5RN1_bXXm8L4lDfZt9mg4UcdbnTX3OiwqkQBj48bRUX7c-cSWCL5UJ6G4IfKmR-O3cVyf7NUKaIN-0tB4fq5ETjLaUzXYAi_gT4Qo_h2LK-eFGFNJQBk"},
    {Id:22,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=wy1ms7xFTgauKnN4foflBHPcyganR89Bu68NkHRG9r3E9y7ch6PhgYWl49G03rJvLUXUrw8JUvL5OYvKYfgceWRv5uQ8Hzcwmry8nD6toJJX7UGSzfh_V_TrD_cN-ptTQh9Nvx-JBWKQnE2rIT5tjO8xk8-0ANcvgZXqBSC7KEspAXlldOYrhcrw4SJbt9JPdlfAvSlqm7FtSp-c"},
    {Id:23,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=rWF2vnHQoFxtjgaUe_dzF97Ux5kGnvp7hRBHRrsIF-yj7SqHnU41AXK6yVvxyffvGDEx4q4xtlwirDQJuXRYaBDCoee07e90dCYpvLx-OMCmpRvcbuKzb_3KBH1ofUpQdud5nPKcMF5L8aP0tFHXi8-ymRSim-RwhtpYG73VEcnS07QxTjlOvQkpWoQErBreLFrwenhAgI3xyGwk"},
    {Id:24,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=MXIccOl9jsSzd_qE2Hi48gxiuRWKN1MiAbRnHbKYJEu1pRdLQvw7ZCi7FClzN5hqKTjFC3THgrVRiJoSzVgSYuIjlAxBKWqaoPpXEb8d4F8s7jZy4lz126C7xMkNM1Gg5G2O8v_p8RGLJXh1m7Dsu0Dphvl-MIhvM9qgYbYr2V2zv6edt_WIgg83unDsL9giDsiLkux2mHgi-tBp"},
    {Id:25,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=xL3wFg4-dMhdGaVLzJZWac76P_Q2u53ccQP27xo0LQ9IKb1kZpMwUA6mmksu2BT194MGZT0GMPxvWfl0K7tDhHDFBDHWk2CNdE1W_8J3y9pKS0vh43WpeKIf3JQmbDyCsswhLnkK2W_xRmNT-8c-tuNmg9QffS8LSL3m16hDjlBWHmeea-wlRIZmXM4-as3ZXabwl-MK7Oy1U6B8"},
    {Id:26,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=pHVLP-pM3cON6EnG10fkSIdXdzjWM-SPUKrPRJfkGMa9CeSvB8N7Pmm5OVFbMWyWO471wjdGwmh1lCSAnn_YXQL48nFoh-I1ItukmNxA6jJLb0ug07n914lAkmSaVhoteCBtUvPv_11ncGYTOqDXRj7-nUWA1qJrqF4CQmjIIvXTa36aNM29_ki4dv0"},
    {Id:27,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=wBj8SOFJZrwODSU8buJbzRMZWgielyPT6rYzPPsHbG8xvb7veAq6rN1vdYbP38MwOQW9lDB9sHSEgwI-WEtcUiP0GUjD6NVgC0medutQVCDyBRxBdUasvYKf8fxwkjQO6Ubd5ReI6dRRDgaZCRq0zT1oVDb2ePeC91Pg2enmHG6f61VMxmdT67M5ChdauNA-Va9q5HuL4pyQEC5_"},
    {Id:28,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=1FA0YnGnqcKt3EnruNVtIU_1twV705qPlY1I_6HuqGs0CpxegR983I3piKZWkDRf5ORej0HS-Y3xASu89oQJaCzCdkhed0jycvSVXqRslaOUQ05Mhvku7fz9LfLO9yoA8xVRuPtYLCCGUiHDWd9XOmrOLfFlPWOMUJv_Q28GvKVxumz0J-v65etZOINVsCXGp1Tm9-kPENKccFNp"},
    {Id:29,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=z7kHg2LpdcE6l05KfXl-oUQXno1zi0Y63TZJpUrXunZwTdj-6yMV-vE2XQtZbaWzjh2cQLVzMVdhjoHsW5LxfJjC4c-1R2RLC1moJ3M-YhzUySheYWfBZNKG9mfZe2AnJywmfu1Ymfdf_sj8BhQUcBdFipgOwjvwSF_M_5X591dMfMcgElClFPq7msQ"},
    {Id:30,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=XfNufh8xFBkLExSXdeAnLXkfwYLDGZB5aa8xFirvr-Y4A7qrL08ZjnsuK0l3a8bD6F9DJQNqjEuQHpPjKkLwS7k5-uiL-VLHhtd5kS3RalAPO335QVo-YPK3h2C7OIV5C0xNqikPNcA80x4RLvPT52nzGGZnqqRmDrUmIDfj8_Y1TXQ2FpRBlZdcs_0"},
    {Id:31,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=uaPPrgcYKRr8DbnPl_jKOvn9zvcw6EK8rJquQNgqvE-xb1zBVwwr6pNLyXBfN9WuXvmtDKZkktOIVV-LxT8kLpKV0dlv5RN1_bXXm8L4lDfZt9mg4UcdbnTX3OiwqkQBj48bRUX7c-cSWCL5UJ6G4IfKmR-O3cVyf7NUKaIN-0tB4fq5ETjLaUzXYAi_gT4Qo_h2LK-eFGFNJQBk"},
    {Id:32,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=wy1ms7xFTgauKnN4foflBHPcyganR89Bu68NkHRG9r3E9y7ch6PhgYWl49G03rJvLUXUrw8JUvL5OYvKYfgceWRv5uQ8Hzcwmry8nD6toJJX7UGSzfh_V_TrD_cN-ptTQh9Nvx-JBWKQnE2rIT5tjO8xk8-0ANcvgZXqBSC7KEspAXlldOYrhcrw4SJbt9JPdlfAvSlqm7FtSp-c"},
    {Id:33,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=rWF2vnHQoFxtjgaUe_dzF97Ux5kGnvp7hRBHRrsIF-yj7SqHnU41AXK6yVvxyffvGDEx4q4xtlwirDQJuXRYaBDCoee07e90dCYpvLx-OMCmpRvcbuKzb_3KBH1ofUpQdud5nPKcMF5L8aP0tFHXi8-ymRSim-RwhtpYG73VEcnS07QxTjlOvQkpWoQErBreLFrwenhAgI3xyGwk"},
    {Id:34,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=MXIccOl9jsSzd_qE2Hi48gxiuRWKN1MiAbRnHbKYJEu1pRdLQvw7ZCi7FClzN5hqKTjFC3THgrVRiJoSzVgSYuIjlAxBKWqaoPpXEb8d4F8s7jZy4lz126C7xMkNM1Gg5G2O8v_p8RGLJXh1m7Dsu0Dphvl-MIhvM9qgYbYr2V2zv6edt_WIgg83unDsL9giDsiLkux2mHgi-tBp"},
    {Id:35,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=xL3wFg4-dMhdGaVLzJZWac76P_Q2u53ccQP27xo0LQ9IKb1kZpMwUA6mmksu2BT194MGZT0GMPxvWfl0K7tDhHDFBDHWk2CNdE1W_8J3y9pKS0vh43WpeKIf3JQmbDyCsswhLnkK2W_xRmNT-8c-tuNmg9QffS8LSL3m16hDjlBWHmeea-wlRIZmXM4-as3ZXabwl-MK7Oy1U6B8"},
    {Id:36,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=pHVLP-pM3cON6EnG10fkSIdXdzjWM-SPUKrPRJfkGMa9CeSvB8N7Pmm5OVFbMWyWO471wjdGwmh1lCSAnn_YXQL48nFoh-I1ItukmNxA6jJLb0ug07n914lAkmSaVhoteCBtUvPv_11ncGYTOqDXRj7-nUWA1qJrqF4CQmjIIvXTa36aNM29_ki4dv0"},
    {Id:37,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=wBj8SOFJZrwODSU8buJbzRMZWgielyPT6rYzPPsHbG8xvb7veAq6rN1vdYbP38MwOQW9lDB9sHSEgwI-WEtcUiP0GUjD6NVgC0medutQVCDyBRxBdUasvYKf8fxwkjQO6Ubd5ReI6dRRDgaZCRq0zT1oVDb2ePeC91Pg2enmHG6f61VMxmdT67M5ChdauNA-Va9q5HuL4pyQEC5_"},
    {Id:38,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=1FA0YnGnqcKt3EnruNVtIU_1twV705qPlY1I_6HuqGs0CpxegR983I3piKZWkDRf5ORej0HS-Y3xASu89oQJaCzCdkhed0jycvSVXqRslaOUQ05Mhvku7fz9LfLO9yoA8xVRuPtYLCCGUiHDWd9XOmrOLfFlPWOMUJv_Q28GvKVxumz0J-v65etZOINVsCXGp1Tm9-kPENKccFNp"},
    {Id:39,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=z7kHg2LpdcE6l05KfXl-oUQXno1zi0Y63TZJpUrXunZwTdj-6yMV-vE2XQtZbaWzjh2cQLVzMVdhjoHsW5LxfJjC4c-1R2RLC1moJ3M-YhzUySheYWfBZNKG9mfZe2AnJywmfu1Ymfdf_sj8BhQUcBdFipgOwjvwSF_M_5X591dMfMcgElClFPq7msQ"},
    {Id:40,Name:"Building",Image:"https://fsa.zobj.net/crop.php?r=XfNufh8xFBkLExSXdeAnLXkfwYLDGZB5aa8xFirvr-Y4A7qrL08ZjnsuK0l3a8bD6F9DJQNqjEuQHpPjKkLwS7k5-uiL-VLHhtd5kS3RalAPO335QVo-YPK3h2C7OIV5C0xNqikPNcA80x4RLvPT52nzGGZnqqRmDrUmIDfj8_Y1TXQ2FpRBlZdcs_0"},
    {Id:40,Name:"Building",Image:"https://fsb.zobj.net/crop.php?r=mQy0rKcfAOPCpDCH4Lga1tLKJxq3XX_4JL5Y1VE6fstA-F7vEiaV06xrDOoOLMZn3RuQ2sz5TvxoQp8lPk45XWV38Cr3OI-UWXwDAYmCeFecLj3ZGXLbkuZBvGOqLzWbfw3_rINVch25W_ba-ktb24SKuUVkgX3wxh7D56xtbDUqYB1eSG4DRzIqXy8"}

]

function Building() {
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

export default Building
