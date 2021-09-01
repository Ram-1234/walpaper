import React from 'react'
const Data=[
    {Id:1,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=s-3ZMVGjPiAV3MSM0G7XAmIY3KvFI1VRdRdZp9E446de8YSWaPdxc2Vf82Uk8BICpIG0QlpOgVjSJeFq2qNShyQsfrWnOzDW-TB2Bjy6VqlmF9kSiDb2VQ9AdI_EgQKj75b_UDnQMQ-7KSM5Bt5SCRK2w4kggFMTXaCNLvgvecRD8cJ6_GlApS1tXxUD3ietW5UgtMXh6pej7gOx"},
    {Id:2,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=HN3DkMKcnRuqAE_c7hvtQJOQP_LesTKJ0KdQ6XwH1l4S1LRKBaW0WEdAPe61gzwYgptgDXCAqTvS08BU9ktcNdTZXV3mh15EnIdh2m_3pobrhK7QYa_xRCSam13ZFmxw1guhrSDIeXSoQ7R-GwyAhl7QYUGTzpv_l7b0TYdK_ineXA1MT1Ss0aU2NjI"},
    {Id:3,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=5TVsLN_jImzQS3WGmrMDojUzSn6O5DpP4F7sC5dIKDHV-yIcV7G4VNipa7F6Ub1hY_K-3pD8nPMLElNIYlAg55Prw87r-tsjSyZXtJpAMSWgyaKNtaOaC8vlDR6ZF84XEGIVRnTceFbUyKltSKPMhSNWO91TriTKEj52qh-UspMzXnmnnO8mEe3DED0gikrc9U1kKHE1M7RGCrYp"},
    {Id:4,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=hHoSmuvckpKi8plAiQUjKow9BZdPkI7rdAENF2WAOxxFDWCUfi13y0dHxBVIhQew3EWPDPs6JjGRSl43xpOFos_JwxlhT1LBqsQkNlyv-lFP0iC14Rf9RRl0UVqcRM2PxCbKcazy16LjhMnfh-3c2bLByzCDvP3XbwYk4C5WNRrdV7Qm811faOioYfM"},
    {Id:5,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=6MfgdsPX37pdLIYsVhwosqpfvbp4IiKx9LB1kIOh_HTfFZIRaif0K_bFp81BgyCYmPM_3qntDLgPNMugAAJ22Dsczaxp5F50sHiDL0s3sEx7Vm19l1M577_vxulg92u4iskGbstZTcgFKhDewJIe5-tqVjNvrXv6Kh3YiIpOR-wLLoXO290U-hnMu0W2LyrWHe90mw1mqNsYg_3o"},
    {Id:6,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=3ls_2st0kKi2hil4UpktT-GSdY3oRwVP36wiMQkFTp1Cndo1vN5iIw2GXzkdS97tazvSXaG4usmPqJAzePGzOK3976EvHBwRYJAnIF3o14vLN0N8gVPWLeMWhixsRY3IX1myDPDidb40OBzUq74cViEFeuOweHwbT4oT_0sCMnruy3emADNJ-6PPyrI"},
    {Id:7,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=lnLZ2e8c1Lft7tgmWddrRdAppUhdNT9LnX1OqwQeT3nhJ-AwNo1m77MBgfhbpUa6OwgggbjRTylO6aVLkmQOOccR9YdQ53yAFP5LbuBXVU0XxDdXEkqPpAc343IFPwNL26BuxKappo_u3wbs8qym8D3tJ4fEbCwym2Pcp5E96tPoMQYEGvLE_TAH-_TRaAwZOtZQOexvBr4QRjAH"},
    {Id:8,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=XyoBrTsMBt0tLcw94gFqJqTHVrOA9jjXNaFV2ge4fUYcghP8ioFy6V6nun9fl0orgt81D1h0poXijvGoO5SF1KAnu0G4Z2yrUi8W2X9WEWGvjS2FPJP5aAVZ4YjwcC-LDnjUTzpw-qqG4o2pNwueAkUOcbL0fmDgybuQSZHu-mz5Yd030kyyvcwHr9Rwog0FZB2SIuBfE1aanwv7"},
    {Id:9,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=eWO5zDlRqqVTJ3cfgRhFZHMPhydvGWexR-jaWGQ74a9SAO6pC-_jCv9H1qqEkNf_GK4LMJJcADXd0FslFupPZGJL6qKFX0yKZgIo5l_8HKyz37VS7_qVUoHC99idr-dsbWg1YiGT1ByExL80njmzTAZnTBLIIsa-zVus9pSkAauiUJpdmBlkZggt7E4"},
    {Id:10,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=3052LEbJXmVRemsoWTxIHi9vf3ldKMFj4Dw_6yMrXAKxGX7eQ1F5W_JXAsxF5g1vysw4nEeHGj_QcJIckD_0tWsDdmbzbFJFZUEKhWixUse097O5ShgvdXD1xwDJgKcnjqC5kwUH5ySousgIIUN7E6I7AzATpdo1QS-LU62f_RywnFO5yjIS5FYIT5A"},
    {Id:11,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=BRseVOCXWr4vHo3h7Py2FtzXYRlTWTbnpn8E3alRihOwIo0jWlEo0YaoUN2YFWPChl24xQ-PuiTa_IFcw_pQRZFPbykpsaCheipKWjyPY_yQEhLHiWyddysDemyYmpx1pBmO44ie2Lo9zHGxbNoZUtnpb2G7EGZLXVSS6wmP-fayhHEcy4PfdA11wr1GXb2DbKaV4Kj6ZZvripM0"},
    {Id:13,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=jCEsAVEqN5bGFMR5Ha2q864Z_9_YnBPAP3vTzK5E83s4OSoD2Antc9YCL0FM7SZ8qOqFzEIwXcJ3wFwzsvEVZC4BZftoWhvYDr5XndYDzK5w95QEEh2wnFEO1n7EGTX29EiHcrOJta9bQd3l2PLExxIkcIkiaikgygteoZ5aiqduVx--p8Lg5lUOrNvyNcL3cpcnJSrqeExOIzhx"},
    {Id:14,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=n6WFS4RkbOCBz9cUt2X6jUmJc7u1ZtMhZAif1sLo2wv69gh3Iewriim_SNTGYWSwx0fvHUVoldqp984qrV49nswtPybPcM1UqU1HH6xuayrVImaGonr_LrK54LuaUBICJxFnK06nrdeiXAKfZaH-1jF842e-i-Ua2VpRhnWcvNY4Sb4vGP4jWoPEnf9ve4A6Qpt8xdiILxN0Gs6y"},
    {Id:15,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=s-3ZMVGjPiAV3MSM0G7XAmIY3KvFI1VRdRdZp9E446de8YSWaPdxc2Vf82Uk8BICpIG0QlpOgVjSJeFq2qNShyQsfrWnOzDW-TB2Bjy6VqlmF9kSiDb2VQ9AdI_EgQKj75b_UDnQMQ-7KSM5Bt5SCRK2w4kggFMTXaCNLvgvecRD8cJ6_GlApS1tXxUD3ietW5UgtMXh6pej7gOx"},
    {Id:16,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=N1YkE6WGHnrO1NvIDXD8kz7C5WJIVDdJuEvKLUfujEwMCHn1UiDdQVijLzmYbzT2syjYkBm51mqw-fhCb8h68KDPWiyHtVuMoy4CIGMKysNGfV0S-KCyBm-4kB2gEZNmNgi7R_o0r_EnOqP0M4ccW9CXgFCVAPC6hIFrh_0uwTLC_RYQIibra4MsDfJcy_WvnH_hldjS8QoeNInv"},
    {Id:17,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=s-3ZMVGjPiAV3MSM0G7XAmIY3KvFI1VRdRdZp9E446de8YSWaPdxc2Vf82Uk8BICpIG0QlpOgVjSJeFq2qNShyQsfrWnOzDW-TB2Bjy6VqlmF9kSiDb2VQ9AdI_EgQKj75b_UDnQMQ-7KSM5Bt5SCRK2w4kggFMTXaCNLvgvecRD8cJ6_GlApS1tXxUD3ietW5UgtMXh6pej7gOx"},
    {Id:18,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=HN3DkMKcnRuqAE_c7hvtQJOQP_LesTKJ0KdQ6XwH1l4S1LRKBaW0WEdAPe61gzwYgptgDXCAqTvS08BU9ktcNdTZXV3mh15EnIdh2m_3pobrhK7QYa_xRCSam13ZFmxw1guhrSDIeXSoQ7R-GwyAhl7QYUGTzpv_l7b0TYdK_ineXA1MT1Ss0aU2NjI"},
    {Id:19,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=5TVsLN_jImzQS3WGmrMDojUzSn6O5DpP4F7sC5dIKDHV-yIcV7G4VNipa7F6Ub1hY_K-3pD8nPMLElNIYlAg55Prw87r-tsjSyZXtJpAMSWgyaKNtaOaC8vlDR6ZF84XEGIVRnTceFbUyKltSKPMhSNWO91TriTKEj52qh-UspMzXnmnnO8mEe3DED0gikrc9U1kKHE1M7RGCrYp"},
    {Id:20,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=hHoSmuvckpKi8plAiQUjKow9BZdPkI7rdAENF2WAOxxFDWCUfi13y0dHxBVIhQew3EWPDPs6JjGRSl43xpOFos_JwxlhT1LBqsQkNlyv-lFP0iC14Rf9RRl0UVqcRM2PxCbKcazy16LjhMnfh-3c2bLByzCDvP3XbwYk4C5WNRrdV7Qm811faOioYfM"},
    {Id:21,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=6MfgdsPX37pdLIYsVhwosqpfvbp4IiKx9LB1kIOh_HTfFZIRaif0K_bFp81BgyCYmPM_3qntDLgPNMugAAJ22Dsczaxp5F50sHiDL0s3sEx7Vm19l1M577_vxulg92u4iskGbstZTcgFKhDewJIe5-tqVjNvrXv6Kh3YiIpOR-wLLoXO290U-hnMu0W2LyrWHe90mw1mqNsYg_3o"},
    {Id:22,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=3ls_2st0kKi2hil4UpktT-GSdY3oRwVP36wiMQkFTp1Cndo1vN5iIw2GXzkdS97tazvSXaG4usmPqJAzePGzOK3976EvHBwRYJAnIF3o14vLN0N8gVPWLeMWhixsRY3IX1myDPDidb40OBzUq74cViEFeuOweHwbT4oT_0sCMnruy3emADNJ-6PPyrI"},
    {Id:23,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=lnLZ2e8c1Lft7tgmWddrRdAppUhdNT9LnX1OqwQeT3nhJ-AwNo1m77MBgfhbpUa6OwgggbjRTylO6aVLkmQOOccR9YdQ53yAFP5LbuBXVU0XxDdXEkqPpAc343IFPwNL26BuxKappo_u3wbs8qym8D3tJ4fEbCwym2Pcp5E96tPoMQYEGvLE_TAH-_TRaAwZOtZQOexvBr4QRjAH"},
    {Id:24,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=XyoBrTsMBt0tLcw94gFqJqTHVrOA9jjXNaFV2ge4fUYcghP8ioFy6V6nun9fl0orgt81D1h0poXijvGoO5SF1KAnu0G4Z2yrUi8W2X9WEWGvjS2FPJP5aAVZ4YjwcC-LDnjUTzpw-qqG4o2pNwueAkUOcbL0fmDgybuQSZHu-mz5Yd030kyyvcwHr9Rwog0FZB2SIuBfE1aanwv7"},
    {Id:25,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=eWO5zDlRqqVTJ3cfgRhFZHMPhydvGWexR-jaWGQ74a9SAO6pC-_jCv9H1qqEkNf_GK4LMJJcADXd0FslFupPZGJL6qKFX0yKZgIo5l_8HKyz37VS7_qVUoHC99idr-dsbWg1YiGT1ByExL80njmzTAZnTBLIIsa-zVus9pSkAauiUJpdmBlkZggt7E4"},
    {Id:26,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=3052LEbJXmVRemsoWTxIHi9vf3ldKMFj4Dw_6yMrXAKxGX7eQ1F5W_JXAsxF5g1vysw4nEeHGj_QcJIckD_0tWsDdmbzbFJFZUEKhWixUse097O5ShgvdXD1xwDJgKcnjqC5kwUH5ySousgIIUN7E6I7AzATpdo1QS-LU62f_RywnFO5yjIS5FYIT5A"},
    {Id:27,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=bO_-x5KBZJ-ZTVr1SAiqAEXzSH6qaCCh6163j9K2wUWX6xpQA1hMB5LW0rEPdA2vxNmpx8zq-gqJ9otC4gdLbiLPkc8RJJ68AhzVoKfneZPq5zUmmy1ZpIYXGBQnY53UoxZ3wbwzA2-rA9ghDrzJDkp5S9pf6VaYCf_JlK-p5fA4FJyndsgfT9pnVRdV_zc91PM3DebfkOxdOO5d"},
    {Id:28,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=dqhraFbwPt58v2kpUWfMJYLS361wgKSazVnFqGq5aZhEkolHo6odhjvy9w843nQ39LpjN-M0SOLlYNnThy9i6tAEmH3cNU2286pmdPg69epSjhhUcaJpz4-8Ai5m4AHhMBn56GP07pomk6vjsNSE_JEAdx2yDKuRjDnc1EkSBsDl8wpCWUKQEFLFpU8"},
    {Id:29,Name:"Nature",Image:"https://fsa.zobj.net/crop.php?r=74d4z-Sn5cdvdSMYGlV9y7xRQVQhbsw0fbh-3mlZPdLo9lNytWp7ze-mrnzb94QrnB5rDfJDBTYjB7i4e-n-5zfklQCqNqklMkE8Ljdl1DREqL1tCr_Wfk2Gs0mBCljFSGLIjYNsI-EPDAY-hqMUFVTEpulSOLLGDgV7ADepxOjAp674WR2zDrh5cSSql7QsEg2MxmhqEnoLjC89"},
    {Id:30,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=u3tG_u_JIUp8TQV2BdGmRdyMedEHsL17w3U5pkGSKsaQvgzCC5phu17fTjMy0qu5kHeQnlCoN0--RONn448NhHUQy4yQ88zQP1i-RmCOclbCOXkQM8Ra-Mk7IggP3-n3Orb2hlIbKasackQfmQaIHkXwXw82uo8-ikhZeBLhU312U03oXKegzEX5g7lB0ih0LDJnrpkTwk1NRmCr"},
    {Id:31,Name:"Nature",Image:"https://fsb.zobj.net/crop.php?r=XjPU9OE-ctrCa0cIH5bXQYCKDy7qQY6VpRmhKFmGqlFJ0AhnWQFXEL0G6rFfA2qbE8G2FzzHuNNpDX2uiS-gRiOzkNy93qRbhPqKQ0nMo2JkaWoLueXBEXDnp5KQpuxxIEjkbD7o3iC94hpPq6-R1zvShggomsZ_vued44TSGPt7f5OcqzhabP2dJ5IrwVPuisaUb96W4l67hB8R"}
]
function Nature() {
   
    return (
        <>
            <div className="img-item">
              {
                  Data.map(item=>{ 
                      return(
                         <div id={item.id} className="img-details">
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

export default Nature
