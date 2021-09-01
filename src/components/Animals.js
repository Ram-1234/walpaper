import React from 'react'

const Data=[
    {Id:1,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=_zbxQar-WutYKgqPAKZDf0rBDmHfthvbScRiZKv0OdyXgpKEo7pu8kpLtI0VmgI0v3ZR_FpesVDSFcEDDKF5DN0cshFCrPbnHNlf9k6Pgk2hLHJd-l7qDKvQ4kzmUmgfufzjYZXxMKizL3-zVnq6-mhmTFxXy3ZEH1BYn__BmHxc2jZMUK-e0_s6YpDr82d2pbL_I7RojXVSQBUO"},
    {Id:2,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=_jMrOAPCTfr7Xkf11jHdS6GMQ4v4QUdSAzYjU51-kKYCkRjgu1YnMCip5KKGYLcoYFw-t02p_s7qKiFjxxRcnhHpZLT0XH7tMUTEN9DwkChn4u0DsXMuOANfpG4-YarvTMPa-qTHw3yw_Ci0oWKAaNBe84AHPM6p2rj0JMybuRX8NhH2Tg0bwD_lTUpgm_yP325bLSjqy04A2IJl"},
    {Id:3,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=3lLBdvrX25ZStUwdnqtJTpW86lQ7J1QnmB4YoLCJYYU0G9vMCt12Yjj4jld2fMT_xOh1yMWUWly2ndb7Yd9e1lQvz_JG-VifsR5Gs0nQJ5ObOfPmhDDpr9qreZ3bmT-m7nCcAnvqb_phFIGOg8nZ_WEL4ZpyJjaMAM30xc2itH9XOzMhx0C5DdlXxfw"},
    {Id:4,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=0hFDtM-mIRiNLi4RIj4hisYpL3cJEPjKsDKTC05VGdxJydOL23Tw5s58mk_UyanmYdxc4hl21VHqi_SQxUtOq3IeXuNHnrMw00h-7BsUKYaGXvg_IgLdJniwJx7E-q4ZmwQqHNE6NpwIPzVudcWXC7z3QYUam0wbF9WqqOt-SZvYhbgOzIsWdKPfNNwNWXie5hszuxvJXIIHdRTx"},
    {Id:5,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=-JGMgbtGgtgZJUXq0ofqn-WxZwHvCXO-yZwEcJ0JnGltka-T-i734dgNeCzjQArVGMcqiPBlqSlQS44zGOa46JERNdMrtKgzy3h5oAMtIihBdRBbAdFOhpqaj_Hq_IY1E_i7NO5Dv4ZaNX3lT9V7etOLaC4M1hJZN0cNIL-1oH19oJx1eUPyIKkUBk4"},
    {Id:6,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=J87DSDhuoin_f8ReOg1kQkoB-8y6Pa8K0nHHmGjyLq7JC_CXBFx0ZSYjqUsqlJBPmY7sbhiiU18rDQsBT8DQl4hNNVdZ-BVbwqEM--8K0k2mbaiki2vgjgMscOTpTUIPNJPH4b5pwkj_KnJ9yw0srawjT0HE1bz-zeZrOt_CFArXFCnU26A-gSEbOf39YERQjZLTCnVXFsNFmphm"},
    {Id:7,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=KJUqK9-RF6E-OeRJJmKVIBQ59jg8aSxVONog0PsH1hOBLxU-atyUSnJBX5TIWHzGk2mBLYe3DbpL9rOLAYnsGj08vGSFLHJNcVnXi6LZquBc3zKbYQ_p3WTD9v5M_MDOn41wZfCeyOsDf5UUscbNVPnOrvApoptKEzsE9mtFU2WlcSdcY0qIq0PA2Ek"},
    {Id:8,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=FMXNxbiX72bg5RNV76DWkNFGbGpgQqiebXAg2B0Ffa1jpph2_DEZjeAzTnMOTnnYglp7irLktMbd0ccEJJsQ2I0a8rckhHkznHZzgoEFzN7_5CMfCEqwNm8-G6dZyqildz5dIfYIds1h_rlnzkBNClkGvL53Fem87uoYyauuq6kFCEnMrHQOwRt5sdcoYT7iEoEt2-Kktf_Alw99"},
    {Id:9,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=TdslDQf267L8CkYKdEzcQBrAU3puXBWQpwamxTRWuMTEdu6Hwkxaupdv8KCsnlSPqEDtuGBacdKYli-pw2fjHhr9MdxZdEDzbdropZYq_JtJ-h-nzm6FnvveQ-TPbc0TpzEJ6tLJiogK1S3ooad4_soDTxbfrn4UlvvBQoGa3h4SRz3I1RFsS5bVfYsPyEz_9Lin6wDaKAbGuOxM"},
    {Id:10,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=o5HxU1UZH_5e9SnqCmVFLBWqjWG32AEiBmz2zEhG3gbqroXLNWCUseyQW3T4lQ0SdcSl_4ijyX_m4q-e3x8PhOTSvQh1A5qZcZr16M7TiATQQwVea2APVom3PfOK53j6ZHHumz-dgkbSjtZP_bS0gZ2Lp9rGV2zq2VRnzLR-iLizbddCrI1UVirF56Q"},
    {Id:11,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=D5UkuKB7z_pb7vJYU1ynX7CI3eQbwtIal1BKAzLlScJp1f40LNOpg8GT45taHp4YmSmR8HOZ8r8ki5Q7ys-n1kDBvHga3rPiHEWS6pI8rXqNhLnH1xh9eEw78jFYz1grzuAHV6rCFyrM4XuFGZ5Q4HEKDMStl0PeKMFHgYdnKWad45Ca8ULPo3N_dDtGObhfBHEGvNfMhPN5i5lp"},
    {Id:12,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=DpPZzxwpvJzS1qBjb4jcmEhtJjpSOkgU6-39XuCbPwj8W1ZWrXmGlKvoDKS1Gc6UGcvTOv_RN5v6aa0K2FGMC2rpTX0zLl0IkulUFAoJ7mVyXcw9M0BWcsZ6ZyhD--vNCExrr2dJWKQaYhl2iaVm4nGs3aCMTwsRYADWELRURyTj_XaMTc0CKoel-48"},
    {Id:13,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=J-3SCniF4GfPXOGiPQ99pw5ZE1eNY70oFhmutE2DCkwX3HzmaNovmMf5TpqosiRq-Ih5CBSJBUW05hVo02kkZp0JvhEo4T3s6ZxVWJV9vzdXKXBLzikEOMWJAhnHuUSqCyVJNn_t5yXspreMdnnCBLoVyXtLZjCochzS8cRi3Zokbh7B8B2e0hRhZ2I"},
    {Id:14,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=eHbixTm5B3zSjNP4m0_6Rv_9r2buZ-BlMChkpzwDKEIGP4JFd5stS4nCCNi9IrAWYf-yhMumhOztiBi069YbYLQl0r351KVT4ubrUgMpJolvB3sLKEfmlPrDDi35HftPUxGw8TNjCFruEHDzsVo7eCqANZ83t3R7EmLlt4eRUB_y9DKrW3CZcHWA3ps"},
    {Id:15,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=5dv4eg7bCMr3v3EQpmuZSs0w6Ql4Xd1eDkwh5zvHbKH5Y7VeL_yB090d0psvPphhMx3LDjuUDI6BmEmYB6bAvapMk802bZHmVrxEcS5ammE6J6Bi8nyQqmJAZ-A8OYzMAENfZdxDxweSIQklcHB0BYxeLpL-u5TCgZ3g5rtqlUydJG362WgTcRBsQC_2fGW8DIb4uQJpy9uPwbLl"},
    {Id:16,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=HD1Wc8SSt4vbGb1nm88I_B4Hmk_ijRAadlgi_E02352ps9p-zpuiVehvCtB7dHMCqMdpD9NYufmo_2o5McWXFCPxhafkmRsl0WxApKDAhA47oLnKAaRZWgO-na47xLk2iTyvLOpyr2ai1EYIryQiFHgaIoNh_rUkY82paPV-qFYmxgXBMPm5I9iFT-I"},
    {Id:17,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=YOIvb5A0BMC8gLDdPkVVBvVG7el8IF5f8wyJsfiaQFnxuMFp1QTz387SlmzPoJWlA-NyRDmIzzi8_TnvANZP7QdPYvhsl0t34IvsM9_-6vio2zWIBbxQ1oqTp6RM7EKLXpVrikiQhUVgToydfk0kzUWm8yWHKeJ_dA29Ey7w7mwitO7iITql5j9kpQA"},
    {Id:18,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=Tw3LNiATdUMHQ9RcMZhvFkhY8NvQTknszSRCwsZAuu5__IIrLbYVg1qaHee7K_JYt4fYGQfQatYBppgVV515VFz9qHOpo3P6E9ZqXU0iBQ3z2j1m9DawXttUV6FIyekuywzKdozv9YSuKqc8fcJS5_bUJIxlGK-nKsyWcdsz5fSNr_LAQbrLYrIuxAE"},
    {Id:19,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=hAHpapmTFrNnXCqOtjAtCY_iH0Nekl3vcmtTac5wZ5swqPqaTa7ndUAcfNIytp_x1UwEuj2lZiSiy4JDYcKq3EoosEb_jBN2k3uOF3U1JiG_BR2kQaV5nQmHLsCgE2QVibq4mUwm0_TJcnvXSrEIiQqSZduK22wH5j1Smlb8dJ04goEVKr4EhRSgIaw"},
    {Id:20,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=HQpbTUBf-gZ1jVufmqXVSc2GM_BtBYEiePYEe6ApzamdPuGt00ynIyaArR9WWPNOkCLo1u8GD6Mm3dzcRnpjmPEyGhX-tqxibxaTza57e9ldWABYR5YhZoEQW_EarJDvtunVGYeWe9rVhOM2sqhVlhGAUrMhSutSM6vEnq6LPIINyr_IZHUe4icUcXgAMbPezQ5f-V0T7Aurm6Kl"},
    {Id:21,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=EvZcYCK4WalaTZSaK1nz2eDpMoyrn-dCV5BkfOJAAMvIlZKKPwMYLNZq2nPcugDUBaXzP3791So4qUoRfPaIvo4Cg3EA807lzzpOBs-BAMzweP-6jDMdIDUd7hOCYAKldBC9kN676zMuLfkSWZ72Siscm2yUvn2SNO3KsViqoGAPNsY84ds8eEj-ksk"},
    {Id:23,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=dvOoximGmQQMGlfnUNp_2bQnPb7kKrjW_SdDWoRRCNL-i7VHZh3opc5pw6kPlASgRtRbMrEn7bLwh62-cAL8LXsskXW16X9A9mkyU1Tyu-bBElXvCsFRGb7hCVdEgdwhBmN9nI5ROV6cST_0myPpIVX86K4EKMJ1_j5BdfMWJPfa5PzaAuBlGjaNe0A"},
    {Id:24,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=KLQn2OInfoS3Mi_HXpJqSnlPxCS5nNhAQ5KIGobURoNkhm-OKMvHDEsKowqS3ZTOhBJvRdH9P3IGMR1nSoDnmzv18lzeoaQPZIHjkEXDMqsrJNpKPDb_gSF1n5Vi4SNYw8IOHzjwY1v5T4puhauTapUqTZuqfuVD1QsvS_6VoORChb72RkX71cEFATQ"},
    {Id:24,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=uD2_e13uLS4rJb58ohkzRjZEkQDpRRZMWvROOGNKR1T7-hy-sPwXw2ZcKciQepW5W5fbBGT_RmMkFt804a4NpAor5tb7zI1IAC_GSor8gZrXlbrGJhs-kYQDplYPsDwnADuMRt4KG6TKzp0X3N9aM1jOmYfCe5iKybJPus9oppKVoWgHPsMFXnGDgoZuaTqMZ5do1t0mX1sEdr87"},
    {Id:25,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=ZyGIQ1W1xOWxlQbwpgdAqBMrTYrFM_GwezFrsRNvmQoK_bmth8too6CBaJxZIreD0_KiDzrDop4cP0LJgViqQXFVAHGMGKMnbCRiOReviJvXo48KFhmdgfnLh8-Pzi4f82HlnXj3rRu8E2pkhZtJPh_L72D4pwef3jGS2vt5Zf0NV4TKI1Q6qcYJSm9NQrD_ByoXgxiCEOlcVFfZ"},
    {Id:26,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=JfghesC2bMsWUm1I-KdeScM_U0gasxlf0k_JkUlToT3RSD3I0z11368ZzsHJjxRCMhGGHfR-XljHTYLkaw56JgDuIxhXM1UVlZN1b8fFIvt8q132mciT9dK40hdFooVsvWyvLsGorlD0AdefzX8Mj_q_4t7UAKgYzPdOx-DkvG1JYdVgJ-cQDkiF1HBlAC4A8E_2-7iL7ZbU-NMh"},
    {Id:27,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=5bGd-JlukJCt0DY9AxmU4vmNL_ri3Kl5gtXy20ovsE1MPJj86RJPqsd2UfOey_PjDCcpgrrD3MzLzoJ6EVHv4XhecIg26iT-sGLWOqxQyg46Jqd0Wp2dEZzQveaBm9BK9ujB9AM3TR0Aj_6RmiKC63t3mvYogMkEtwdb2F2Ewb2kABsGDQodW6ifA8YHZwTi0oNBVf5aLHHm6XF2"},
    {Id:28,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=FeBb6FqQTM362aiXFo4ylzUkW52-tWq37ake05oL0GipqQgVGNVEXLWdQ3xj3pZivYAh7JfI0GRJRrTCz_6GCWlXKtqfjfkr7a6RUbILkZEcsqO5eD-WXWfiw-fPXgFJXZP8fDxky2b_WfPR1kRUOupfEsac-yUETzaSF5JVzlTEkyCEH3ub6M5MAzg"},
    {Id:29,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=Hop5oGeRyZZYvMaRorgXoTEcgRGS3PrIzSa4lSBuNY30HtOOz39-kQrS0_uTqLN871JX9mojaRvKccNRKgMFAP-fXgT2IwZMvd3ARhV9SygOeRbMiMKePEAaXP1sL1ciY-dUj9ZjYobeFIuk8c59K0C-z-fRCLP-iq7neOZJ-ycJkvPB3gP01lPrwWYbi1CoyTL9QEW5qgD65MvZ"},
    {Id:30,Name:"Animal",Image:"https://fsa.zobj.net/crop.php?r=IDg6LtkskagVI7h9yphxeId9Liiqu5bM_tC8Q9vrxei3ILuRSuUQ8ZZax9I8UB53jRek9dQivkvKPxWjmt2__0TUOo0WJokfS2RzX16G2bLpcpR6NNJDdYP10DFlDjNx1T4WAlByuazcigw81sZ01TNrqlliI0yPq0gpKWkdrpydzePtEhwOW-06EB6tHFkPZfOPNSaOz3nL9wdI"},
    {Id:31,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=IfM1cD-D7QTBnxAoOE3krD7xKviA1fm4woP91O5E8baOd_5ffEaAq3UQZGKseYgjRkl198Sv0fYnrQwXLCl-3P1gh3Zv8Up2FCLCrwIB3ywc_25WKrcR7ALoZNH0TPAAFrxD-5wl-zKpz0e6-w8hO1aOXqdG7S3GJ2klhGlkNA-XMzxM_4FxpOBGUI0"},
    {Id:32,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=_93uHalgxpB98SaX5kaAIUB-2MM88GM7VH5vknHhXdAosw--NbJqaW5uZfIHZxH8gB8-t38lFGmxv9wAZecHq9f3aLnPPQXj35nDmKK0C9Fs25iof1xNFKOInuAqqmIpTtVDDR_LO4sVWirn8iFcYC1Potfs7L8LERCPZzGJf4thTUOc_7bIHrsUU9Wu3auXfUoTHiw0QdMrSX5O"},
    {Id:33,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=Fwr9rHRzyKhE2wnAbBPL1b728wm7X4LX6LtqtUd56kBM-vdiNa8yOAusT7bvq4TYx_umWCgB91Hnq_odoi9UIs9wZ2HdeEQJFOITOC2S3vDjpkis2isV3gJtKo_xvQgiRt4rYe57gb2IqTdfCf_qMvn3KWlrjBLoi9pMi75jg_R-U2S5AVcLZloi-5xYEdphcST_GiADPukofZ6e"},
    {Id:34,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=GnbCdNt_gNOuH8KlZWT7o9pAr9eZMc0hpUvTngPUzvB3t33EWRFUyxskY97UP5H_EbUhlHuNXRduA16s-0Zw1hG4Tcvo4gMct_qk_RozC_mfB_ng88k8qsKtln65HLLQzi_EPBsWJIXZZN83g09GQ0wOU0x23XjrVUzsPWGcIJoiX2fqnplLUO9DhUqAvGx1DD76x2ArdPOeHEZc"},
    {Id:34,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=YiM1xTsCAsRHsfFKJqOZRyO01FbJZ_-jrJKtPQuO4nE2oO2IbpWETvgse_Inh9b4Th72uES4TCtLm2gs4vSeahs0LZYIGKjzoOOF6Q6QuyospUzLMc8CUvDocAkqAdGW8ZtJOof9z8nf72eLfh9_BM5c2krGI9l1mshWIomOen8n0OMnMl3Knu5t6xE"},
    {Id:34,Name:"Animal",Image:"https://fsb.zobj.net/crop.php?r=gaprAbwIf6s-V-8FIm7tQ4md6DV8OJo5U895GQGCShW92p5kOrKrsoAwrZxsQYOcZR3LQKnVmdIWOMOQ93UAOFjqDb8xOJczIEGxpijOoHahtpvv8gvMOnaouIqU9Rbv_5U6qGSLZMp4DEqsU8IT_sQZcFKt17sCvF1W5z2fQcTj2alrygytkt7TNrTHlVlgonL2UAOR8zA4fvNH"}
]


function Animals() {
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

export default Animals
