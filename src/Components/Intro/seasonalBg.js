import mushroomImg from '../../img/bg/sienet.jpg';
import autum1 from '../../img/bg/autum1-unsplash.jpg';
import autum2 from '../../img/bg/autum2-unsplash.jpg';
import spring1 from '../../img/bg/spring1-unsplash.jpg';
import spring2 from '../../img/bg/spring2-unsplash.jpg';
import summer1 from '../../img/bg/summer1-unsplash.jpg';
import summer2 from '../../img/bg/summer2-unsplash.jpg';
import winter1 from '../../img/bg/winter1-unsplash.jpg';
import winter2 from '../../img/bg/winter2-unsplash.jpg';

const autumBgArr = [mushroomImg, autum1, autum2];
const springBgArr = [spring1, spring2];
const summerBgArr = [summer1, summer2];
const winterBgArr = [winter1, winter2];

function selectSeasonalImg(imgArr) {
    return imgArr[Math.floor(Math.random() * imgArr.length)]
}

export default function SeasonalBg() {

    switch(new Date().getMonth()) {
        case 2:
        case 3:
        case 4:
            // Spring
            return selectSeasonalImg(springBgArr);
        case 5:
        case 6:
        case 7:
            // Summer
            return selectSeasonalImg(summerBgArr);
        case 8:
        case 9:
        case 10:
            // Autum
            return selectSeasonalImg(autumBgArr);
        case 11:
        case 0:
        case 1:
            // Winter
            return selectSeasonalImg(winterBgArr);
        default:
            // Cat picture here
            selectSeasonalImg(defaulCatArr);
    }

    return autumBgArr[0];
}