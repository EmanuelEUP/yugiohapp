//Base URL
const base_url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
 
//GET ALL CARDS
const _ALLCARDS = base_url;
const _ALLCARDS_FILTER = `${ base_url }?&sortorder=asc&num=30&offset=0&view=Gallery`; 



//Routes
export const GET_ALLCARDS = () => `${ _ALLCARDS }`;
export const GET_ALLCARDS_FILTER_BASIC = () => `${ _ALLCARDS_FILTER }`;
export const GET_ALLCARDS_FILTER = filter => `${ base_url }?${filter.sort == "nosort" ? "": "&sort=" + filter.sort }&sortorder=${filter.sortorder}&num=${filter.num}&offset=${filter.offset}${filter.language == "en" ? "": "&language=" + filter.language }&view=Gallery`;

export const GET_SEARCHBYNAME_CARD = card_name => `${ base_url }?name=${card_name}`;

