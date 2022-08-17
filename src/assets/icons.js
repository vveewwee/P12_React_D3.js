import { faAppleWhole, faBurger, faDrumstickBite, faDumbbell, faFire, faPersonBiking, faPersonSwimming, faPersonWalking } from '@fortawesome/free-solid-svg-icons';

export const nutritionIcons = [
     {icon:faFire,background:"#FACCCC",color:"red", val:"Calories", keyData:"calorieCount", unit:" kCal"},
      {icon:faDrumstickBite, background:"#CCD3FA",color:"blue",val:"Proteines",keyData:"proteinCount", unit:" g"},
      {icon:faAppleWhole,background:"#FAF8CC",color: "yellow",val:"Glucides",keyData:"carbohydrateCount", unit:" g"},
      {icon:faBurger,background:"#EFE2F0", color:"pink",val:"Lipides",keyData:"lipidCount", unit:" g"}
];
export const footerIcons = [
    faPersonWalking,faPersonBiking, faPersonSwimming, faDumbbell
];