import Absolutely from "../assets/Dijon-Absolutely.jpg"
function Dijon(){
    const link = "https://www.dijondijon.com"
    const artist = "Dijon"
    const albums = [
        {
            title: "Absolutely",
            tracklist: ["big mike's","scratching", "many times", "annie","noah's highlight reel","the dress","god in wilson"],
            albumCover: Absolutely
        }
    ]
    return{link, artist, albums}
}
export default Dijon