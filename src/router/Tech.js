import React from 'react'
const Data=[
    {Id:1,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=VLs6MFsaFwLDGwMfb2jz9_qYKNqmQMwD--G-1zg-sYfP4dXayBtKv2top6hPDnouP7Np8drE72y4uCSQpep_GF8hwkRGjLAt1H0WfYLwShx7nuzuK7aVVKd-XM6s_qnbZrVkZv7k7yQ-ey6F3OEUKl_pQV2Me9YqwxYk1_REYGJrJz9GInIOFp8itrgrqHb4kuGOYDDELvlNzAeY"},
    {Id:2,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=Pmlu0TswTqJjpMPiEOxwNimOJMTbchr4eXHyk6fZua3klvRWwPBMLjhghEy2zyZCIqzyXH91ppVp1RBQ8pFyvmpEZggw-M-YCPnRysl12nhltaYGbPqUcnTmq6odzLSERfBQByLIRDFIyjnDXgoe5ltsDE8DCyc3gj7vQSiRzDHXpxt80sdgJMS8TfmDvntYlMUR_Vlyc3oRItVL"},
    {Id:3,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=O9MLccjBtvm9p0mfVr89eHDZNolw-m9n1PFSNSYZGhxVwm7YiWva_3u08LFuSyxfj189Go2NF7dTRupFfiA9M3kSmhlon6Eu8SkZQo31owb4x7a4wEFFQ0Dv6UGzOGxNbIxvxkTI5Mcmse1Ll4xil3irI5dCkRZc0e596HgEfEYFgZwROPh_uWfh1DPwv7XVpf-fxYNNvCn_iqZu"},
    {Id:4,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=tW2kUTsVvtnwouCrPhPMtuN1KmpBtvWwiF2iMPUSr2Vofshzv3zH95Q9Gecnz5j6Kldy44GGWoIdCKGAHe1c9qeOz-WR_oistKIeY5rm-kSv7cdiYW1iuOfB-AlVuy8VlYiUIUgI7rpn5nxF5l6yvJVRVs6NEKM4a0vLw_L6o_TNypVtC2IvPG2s-rI"},
    {Id:5,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=BFI0AvlGxwdI2EEhAn3iKd1NnGdiYvwBmqnGbcrPvSTB4d60aM2DKZwyI07g4Ejh1-755Y_zzPW5Q20Rg5Ly4W_p5ppIkIivAoaJwjX-rk-wurT1YE2lG6BpjYN5R5Gx6rsRhMHa22qzVVVz-G9ppaotiEjeHNHXo3qgWt-x7g8Hc91Gt16PBqOXNrI"},
    {Id:6,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=0opkR3hBW_UnxArDHlXts0FOKSMK3tpWgr-UEzsJuQJIQhI5XV7KWsJ2ncNbNL3bV4S4HSTR2HlfPrvmPI9LrQ5AkveAxfoK-v6cfvEfB2afGSv-aeEpzVLT2glyg8r7jYuBH3LF7v7GYGkyW9NWkg26Nm0x9b20BECW_rmBui8OD-iG40lT6oqs_afv-kX-7nB1W-dNtORL2iCC"},
    {Id:7,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=UOZXPvGLuHc6RlYM0Ks7xS96_TE5KiNKFCxyEXTj10ex94kE_5jRWDckiSC-cueY1nEL9q9S-eczDIYBNTBU8elfjrDKQNr9Y9qqL8d1oEcEpwCziS_ifoeGRPINlGmSc7WswW4WYa79kOhGPzBB84Yc5mnQk6lwd50jkVq7_h7cbtKbLk2h5twSzMM"},
    {Id:8,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=nJ2dJuhCty6RboaYBCJKNGt3hF35NkrpSJWOkE_iQSCp8F8x0Z--v3u19NAhodJAmcXJ12aIJh8fL8LZNzNG1vOxDYVEzYd81CCU0fvaOd2Z5WIaQ3LZAtj3n3XFUHqs0CNEaO-KMSKq6NZZd4rvS1UGftxsvbAEK1sY3hrRB3FDBeqPLCdbZ_FaNQM"},
    {Id:9,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=Auo2ahHozWKTG4lkkGA8TahrBMYsnu7Zn37c1vfqkYIgVqH8KwSLwIHYq08nuzB9RGKltoW-iDk0szuJURC7x9SOK4kguJysBNdd-F1E-YFXcJP4Ae0Eqy0ZG2XYmzvXNRxliS0HSmhLV2uH9TiSrwzN507ZZW3QXS898a-BftFW205omnsdCqPMrynvSuNHofkB6nljnmpD1kWR"},
    {Id:10,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=3dznOZdtdy4g9lPvhfC8W1D1qcd2IxILfk1HnYLAKlHIFNTQhFKz8JMxLxmKb59oWV07uCoU2BNOj9RfiFD71v8x_S5Hj0U4xikzbTJQG0MdjJMY5tjvKPCi3j6hf6uqIKHKDGGQlqk6M2PypnX__NTDCHROHzAWkp2RWbUf6pyRAqPeJ6zScyz5oZnIsGz0FaT3_aAb4hwQ602g"},
    {Id:11,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=E3DdAVBpaIVd4VEICuZwWrKWa2lneXetzw3x74KgHfPGOfiuzsXK1XvZl4XcQtqQFjkAlHSptZD7LvhLWqxP7tX1sPQBenUFY6Hmr5MaP2hsjy-pfG5TPF7SGy_6FqKKn_eVzvFTBgJIQWid8g1wiUNPCMsNkN32QW2v_qzeg6C97LITOvM6dqtuJPiYeYxpO0Xenj3Q8h0Ii3dC"},
    {Id:12,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=IUrjjdcrK3hrDRWG8fJOpVUJNnlASPtW2rGGw-Budmum_m7-QBdxmVMaNIyr74P1occP07NHoiZcVto0-n-yNB3L3AUPgHwr12J9NYkNznI20cSXqThjz6fILMkkaeQb9f-wnp_Kq3J1i-sIXgWcWMu_dYALbLLOYmw1d49U0cY6XVMXCd8KApwyVeIhHANtgQ5vPdzV20Sc9-Ft"},
    {Id:13,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=mV3LSiGC8EOU-fOn7_oIVaqlpco1UvF46afv15nPdwfAzeDoKHIVP8Z6qsKTwa8__qr495aWFW1QP495ukManV-BAEuJf9JxXKiWebqH6b-G5v97nbyqeYV38v8TDYaoDT9gqBUikDgN5v_aC9TiFouGrpe4rFNsIUP3QfDMPzHXOh33v07BMZR0Vqs"},
    {Id:14,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=6yGnw3M2uOFxUqB45q3z_HAwjwnM1LHgMbNYZNvKRzo4Jy6v7uFcr67J0P4IUvHFXTO3AOC-qJV5ruwWZ116s8W7yX8vykoY7Jfv7nT_eKSV8r-7sPOTdi-wGyyEHrg-K2aLFwbJP4yeooSb37e96NDOr9WKwQEMR_xy_F5Jt19q-jUFb8LVsXyfPXjErekw_wkK-Dxq6xtm47mA"},
    {Id:15,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=m8YNSQcaRco0Ds_K5oX22g9kds2-nGNdAnSGnd_JOK_e9ul8veXChGk1tjxmEuK0rx5TqwRznJjg-Ugy0_CKKhRO7niUzWBorbOQhJLGGSHV-Rj76svx5QL6z6CXnoGqittVNR9P4YGClM72Ne4hi9lPWmS1Sf3eYMIh_881mHo-CfGovDCouiLwStriAH2f5Zx_FhwVgrnoESyM"},
    {Id:16,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=4_1iW4faF-HIA-q4BVksUH9PpPi0TSdjXx6j9FQNu78WI59OL_rbwqh5aOUfhiYUELpka_JWCzCDdZwLRlTHh7IW5gTZfOm66VcWoozqLjIRrT06Gnj_miED7Z2UFiloG4ArTP61E3TuG6jLXhPoN9HS1UAJxuoC_KyDMieaTtN4X7OEH1bposaMDDlstYmM2hk10Gp5BvdK9X_a"},
    {Id:17,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=oG66dHMKSBcS5rzmFebdJgmG7uFoBat2FFFgiK4mCYRdpY-QBMdAwaEUqYVAK-Q9satKLayB_DChXRuSz8Cv4HFGzi_CxwBmkh5bKB6VWqADgd5KIBhS7RMjqKaJ438yjopwTRBuOcedmfupB0bO67e9YTNCUgJOMElK6j66Q1Yr495gPSoiHjyYALtDgPm8sjzWEBszMAFWjajs"},
    {Id:18,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=-u2383oXIJlv4FFBrqLsHBiiI5nszgdN5-BIa44bfrj1KYOXtF4TkGZrzMRk373eX0zaL6t5Qrrh35Cttq1jeIuYU1suFNO049uBZl9tEAwfuM_Y8FlFQ90I9lC6If0hH9dDBTjYdQnYg_YGBj3uQTTClT_x1y_z-pS7BdiH7551lBEkncCEa1NtaHoRJb-PlmwycUmFx3FQ73p8"},
    {Id:19,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=IyWj9RFcNz7QC6BDRS6m6hIEJuSByJYrUZjcRqGVk1IT3o2mX1ZpRMKgx-h7uzoQ_JqW8txFZe1tisSNqn5kgY4vRBBNSGyrgK4AJWU4hLdOUjcMOckGK_wmpz5WSh6j_ji3HenqDmbN3ar3UTbu3mH72YsDS1c6ar-N0cq-gV_OTqCC16cTTUyszj3n04hV-et_iavpl4FhlkkQ"},
    {Id:20,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=y8XowYE40tlVhkaId7VnBmOp5qkMzDZqzJo34FfDwB-1P35ZiKoJSLYf47w-mZcc8FnP2N3RdamIht3Nz4JOtyhSRqR8rFKhuf4sk9aVRb0shb5og4NtfLLDjkP61wyWTYw8jDjsqjliB8cNXGz_3gLMPJ4L2JldTIm7_T4neYSV6Z1IDpsTEkIRwRc"},
    {Id:21,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=3Dx6DwSDsSe52GVsIbx7kRQz0H4aQiriGkQOa2MzPIj59dQ4GfN0Ow8voXHRy-pWD6LyMMveJiN1xFWA66Jb5l5wlyX3BvVQ11tNz_vcF2kenkQO7C3Gm_1R-7VdRlZCbVieG11Cbw_KzS2bi5zaHyzlOjwvGWbozPVGipgJ2eWeDb-UQjEsncw_rqInBPbLrYLlUkUrehjFsK5v"},
    {Id:22,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=DSDyjI7igJAxU4t4EgmjFJXqy6YjU0pJf0bmqw82PfQ8rop6mnJtwN8GB6LkRrGoXmfHULmao7E3E46zp0n_M7SnTym3ma-qSQfZ34lVs30GrIPG2fzoXGiEy1B4HIABvRtRrEkjaIRsaUfOFD6xQDKojcfUzO65YiyP7MPFgm350eqtbeTjdPjfAIh5WPxH9UCPozltBwfLOHIS"},
    {Id:23,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=eaSHWRNnXlFq9zWRTbY7cdslRfnu9Ln_rt9DiLtGOqUv3JhQ672SyfXQgExe8XFBQCb91yoHA2kdWtknUIoh-XanBb6rMLN1OIXuVMCLZ1kTU_9yS8IQF6xEP8wSXBJGRCaJh2hpR2X7iiKud9lT1I_sovaxJVyI5ZGNjVTN8mOsF8TLSS9F8Jka1-rGwVS3F6fSiYcnY29qFaAn"},
    {Id:24,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=d7OfkkWcXmdJxyeB2O7LzuU15uxqWwjU3WUgWO8vN1Gn6Wk68QLW60KXFAb60WKdxxojN_GOeiY1HyBFWlPKQcOrWtMHgorF23_vexj2Kp2Io96bYR0LCil-aw9WQCRSS0NBj1N7GhhU1u1_9DOndV6JzBug3H2085HW36I9qMdjagqjVLc2FI3E3VFhXp9v8kndpA0Okag9HtrS"},
    {Id:25,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=Aw4u4psBr1CCQHynmFHRyiInvOesq8jUrUQhvRHpqY8tvk4A5EgP-vR8X8c1SMVcfK7_VBxvBS2fbPX8vxwTzm7Bzr5rM7-5vnC9ZlYoBXpnJCEnPRnMomiaqrxBqIYEpwGct5GK_ycECDeLjTe0VJy3aLgB2HY8RbRS3e1Iv1ET1zS_zS1DSUeSKIWGbqsENZG-_DEDmaipUysH"},
    {Id:26,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=fQyrkPvjUNmkewWQIQAoeVuM7EJccvkoGp7Knopn9imETf5MGR7bFpcXgghnNEHXgGQ3G_dK60tKk3p3_hF9_GSSSVXIzoFc8wy4oLhMWTCL2mY3H5VgRcI24LkWDqixiSy9DtDi6O15iPp5XoO7j3ZtaRvUtxb9nR2lv4AMEYsj6D8ONg4AmMBqjYQ"},
    {Id:27,Name:"Tech",Image:"https://fsb.zobj.net/crop.php?r=gQTmkKxcJnicaoEaOXbcIXiXML_TEOcyrRj4EAeGI44VAr5_Ghfqeao6AaQcIdLaAO29Yf31wmf8OIXvVM6jMAzguYfqoqdjIGN2_M2gOdrAkXCTeJ4MheKtnanJP5ZMGTf68mGkyTOZ_08ZpZFsoMapfyTlVxP4SZohbmZjKls4o3jHQKeEXFDvvqE"},
    {Id:28,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=QRjJB-eyFVbawNC-4wFS6TsWvkLbJ2o0Y5O0KBHJlaiBR6SGLmdZH1Tdl5TL6IbQ4UW7BaLteCvU333nnasS2jGg7Jjm-WXyl9kHfRjx1W_qh56mOSrtkZtD1fAw_pqJTqFZbC5kx_DYkYu0HPiu_NoAPd4EfpGllaMOnlrPOEDupAu1u_7mYFvLeMg"},
    {Id:29,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=knq0L0QE82Xy9RrFU8X6HJOgA3WicZpGDz0Zs37q7-GuCckRUo2trWuczn06ozXjIh6KrFtTqcK149oT-J1ZzcRPX59CKY4zVg9wiUGDy3-T7AfNlEyw6fYcPpElZI06IJrtwWIDOD_wCjNVYKoaBXe7sjIDt9ecE6nJgZI_rDSksv0S_8SloHDUpGM"},
    {Id:30,Name:"Tech",Image:"https://fsa.zobj.net/crop.php?r=heoBLOYHKdu2M14fH0wQpmOnUd2O3BDXgPiKK15Hq_jr6s1nMaxEFmv3ozk4QlTg4dwUdC0okgQctm2ZuN0q0nksdDbVB3HHUclVBZ304o2wDqFp5dn08mXm4bE5qb0mFOSQyjArrfvP5kteqCoUi9NhF6U43k00GV0LYbm5SyN0IxPjbqsLJ0SbJqg"},
]
function Tech() {
    return (
        <>
        <div className="img-item">
            {
                Data.map(item=>{
                    return(
                        <div className="img-details">
                         <img src={item.Image} alt="nature-image" />   
                         <p className="img-name">{item.Name}</p>                   
                         </div>
                    )
                })
              }
        </div>
        </>
    )
}

export default Tech
