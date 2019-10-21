import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Pinterest = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12,3 C10.7578063,3 9.5903375,3.23583749 8.49755859,3.70751953 C7.40477969,4.17920158 6.45117595,4.82226155 5.63671875,5.63671875 C4.82226155,6.45117595 4.17920158,7.40477969 3.70751953,8.49755859 C3.23583749,9.5903375 3,10.7578063 3,12 C3,12.9550829 3.14062359,13.8662066 3.421875,14.7333984 C3.70312641,15.6005903 4.09863026,16.3974573 4.60839844,17.1240234 C5.11230721,17.856449 5.71435197,18.5009738 6.41455078,19.0576172 C7.11474959,19.6142606 7.88378487,20.056639 8.72167969,20.3847656 C8.69824207,20.2031241 8.67919929,20.0039073 8.66455078,19.7871094 C8.64990227,19.5703114 8.64257812,19.3447277 8.64257812,19.1103516 C8.63671872,18.8818348 8.64257804,18.6547863 8.66015625,18.4291992 C8.67773446,18.2036122 8.70703104,17.9941416 8.74804688,17.8007812 C8.78906271,17.6249991 8.86816348,17.2924829 8.98535156,16.8032227 C9.10253965,16.3139624 9.21972598,15.811526 9.33691406,15.2958984 C9.45996155,14.7802709 9.56835891,14.3232442 9.66210938,13.9248047 L9.80273438,13.3271484 L9.76318359,13.2304688 C9.73681627,13.1660153 9.70605486,13.0751959 9.67089844,12.9580078 C9.63574201,12.8408197 9.6049806,12.7001961 9.57861328,12.5361328 C9.55224596,12.3720695 9.5390625,12.1904307 9.5390625,11.9912109 C9.5390625,11.6748031 9.58154254,11.3833021 9.66650391,11.1166992 C9.75146527,10.8500963 9.86718677,10.6201182 10.0136719,10.4267578 C10.160157,10.2333975 10.3330068,10.0810552 10.5322266,9.96972656 C10.7314463,9.85839788 10.9423817,9.80273438 11.1650391,9.80273438 C11.3583994,9.80273438 11.5268548,9.83642544 11.6704102,9.90380859 C11.8139656,9.97119174 11.9326167,10.063476 12.0263672,10.1806641 C12.1201177,10.2919927 12.1904295,10.4252922 12.2373047,10.5805664 C12.2841799,10.7358406 12.3076172,10.8984367 12.3076172,11.0683594 C12.3076172,11.2617197 12.2797854,11.4770496 12.2241211,11.7143555 C12.1684568,11.9516613 12.1025394,12.1992175 12.0263672,12.4570312 C11.9501949,12.714845 11.8696293,12.9814439 11.784668,13.2568359 C11.6997066,13.5322279 11.6250003,13.8017565 11.5605469,14.0654297 C11.5078122,14.2880871 11.5063474,14.4990224 11.5561523,14.6982422 C11.6059573,14.8974619 11.6923822,15.0703118 11.8154297,15.2167969 C11.9384772,15.363282 12.0937491,15.4790035 12.28125,15.5639648 C12.4687509,15.6489262 12.6708974,15.6914062 12.8876953,15.6914062 C13.2919942,15.6914062 13.6655256,15.5917979 14.0083008,15.3925781 C14.3510759,15.1933584 14.6513659,14.9121112 14.9091797,14.5488281 C15.1611341,14.1855451 15.358886,13.7504908 15.5024414,13.2436523 C15.6459968,12.7368139 15.7177734,12.178714 15.7177734,11.5693359 C15.7177734,11.0302707 15.6254892,10.5366233 15.440918,10.0883789 C15.2563467,9.64013448 15.0000016,9.25488442 14.671875,8.93261719 C14.337889,8.61034995 13.9409203,8.35986417 13.480957,8.18115234 C13.0209938,8.00244051 12.5156278,7.91308594 11.9648438,7.91308594 C11.3203093,7.91308594 10.7475611,8.02294812 10.246582,8.24267578 C9.74560296,8.46240344 9.3193377,8.75390443 8.96777344,9.1171875 C8.62206858,9.48047057 8.35693452,9.89794686 8.17236328,10.3696289 C7.98779205,10.841311 7.89550781,11.3232397 7.89550781,11.8154297 C7.89550781,12.00879 7.91308576,12.2036123 7.94824219,12.3999023 C7.98339861,12.5961924 8.0332028,12.7851553 8.09765625,12.9667969 C8.15625029,13.1484384 8.22656209,13.3168938 8.30859375,13.472168 C8.39062541,13.6274422 8.47851516,13.7607416 8.57226562,13.8720703 C8.58984384,13.8955079 8.6030273,13.9174804 8.61181641,13.9379883 C8.62060551,13.9584962 8.62792966,13.977539 8.63378906,13.9951172 C8.63964847,14.0185548 8.64257812,14.0405272 8.64257812,14.0610352 C8.64257812,14.0815431 8.63964847,14.1035155 8.63378906,14.1269531 L8.56787109,14.390625 C8.54150377,14.4960943 8.51660168,14.5986323 8.49316406,14.6982422 C8.46386704,14.8037115 8.43896495,14.8974605 8.41845703,14.9794922 C8.39794912,15.0615238 8.38476565,15.1171874 8.37890625,15.1464844 C8.36718744,15.1875002 8.35400398,15.2211913 8.33935547,15.2475586 C8.32470696,15.2739259 8.30566418,15.2929687 8.28222656,15.3046875 C8.25292954,15.3105469 8.22216813,15.3105469 8.18994141,15.3046875 C8.15771468,15.2988281 8.12109396,15.2871095 8.08007812,15.2695312 C7.79882672,15.1406244 7.54541128,14.9472669 7.31982422,14.6894531 C7.09423715,14.4316393 6.90234454,14.1445328 6.74414062,13.828125 C6.58593671,13.5058578 6.46435589,13.1674822 6.37939453,12.8129883 C6.29443317,12.4584943 6.25195312,12.1142595 6.25195312,11.7802734 C6.25195312,11.0712855 6.37939326,10.3886752 6.63427734,9.73242188 C6.88916143,9.07616859 7.26855217,8.49609627 7.77246094,7.9921875 C8.2705103,7.49413813 8.89013301,7.09423979 9.63134766,6.79248047 C10.3725623,6.49072115 11.2294873,6.33984375 12.2021484,6.33984375 C12.9814492,6.33984375 13.7080044,6.47021354 14.3818359,6.73095703 C15.0556674,6.99170052 15.6415991,7.35644297 16.1396484,7.82519531 C16.6435572,8.28808825 17.0375962,8.83593434 17.3217773,9.46875 C17.6059585,10.1015657 17.7480469,10.7900353 17.7480469,11.5341797 C17.7480469,12.3076211 17.6323254,13.0356411 17.4008789,13.7182617 C17.1694324,14.4008823 16.8457052,14.9941381 16.4296875,15.4980469 C16.0136698,16.0019556 15.5200224,16.4003892 14.9487305,16.6933594 C14.3774385,16.9863296 13.7548862,17.1328125 13.0810547,17.1328125 C12.8525379,17.1328125 12.6298839,17.1049807 12.4130859,17.0493164 C12.196288,16.9936521 11.9970712,16.9189458 11.8154297,16.8251953 C11.6337882,16.7314448 11.472657,16.6215827 11.3320312,16.4956055 C11.1914055,16.3696283 11.0859379,16.2363288 11.015625,16.0957031 L10.940918,16.3725586 C10.891113,16.5571298 10.8369144,16.76953 10.7783203,17.0097656 C10.7138669,17.2500012 10.6508792,17.4887683 10.5893555,17.7260742 C10.5278317,17.9633801 10.482422,18.1347651 10.453125,18.2402344 C10.4003904,18.4335947 10.3300786,18.637206 10.2421875,18.8510742 C10.1542964,19.0649425 10.0576177,19.2773427 9.95214844,19.4882812 C9.85253856,19.6992198 9.74707087,19.8999014 9.63574219,20.090332 C9.52441351,20.2807627 9.42480513,20.449218 9.33691406,20.5957031 C9.54785262,20.6601566 9.76171767,20.7187497 9.97851562,20.7714844 C10.1953136,20.824219 10.4150379,20.8652342 10.6376953,20.8945312 C10.8603527,20.9296877 11.0844715,20.9560546 11.3100586,20.9736328 C11.5356457,20.991211 11.7656238,21 12,21 C13.2421937,21 14.4096625,20.7641625 15.5024414,20.2924805 C16.5952203,19.8207984 17.5488241,19.1777384 18.3632812,18.3632812 C19.1777384,17.5488241 19.8207984,16.5952203 20.2924805,15.5024414 C20.7641625,14.4096625 21,13.2421937 21,12 C21,10.7578063 20.7641625,9.5903375 20.2924805,8.49755859 C19.8207984,7.40477969 19.1777384,6.45117595 18.3632812,5.63671875 C17.5488241,4.82226155 16.5952203,4.17920158 15.5024414,3.70751953 C14.4096625,3.23583749 13.2421937,3 12,3 Z"
    />
  </svg>
);

Pinterest.propTypes = { fill: PropTypes.string };
Pinterest.defaultProps = { fill: iconColorsMap.pinterest };

export default Pinterest;
