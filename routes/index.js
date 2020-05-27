// var express = require('express');
// var router = express.Router();
var _ = require('lodash')
var config = require('./../config')
var data = [{
  "login": "simonjefford",
  "id": 136,
  "avatar_url": "https://avatars2.githubusercontent.com/u/136?v=4"
},
{
  "login": "josh",
  "id": 137,
  "avatar_url": "https://avatars2.githubusercontent.com/u/137?v=4"
},
{
  "login": "stevedekorte",
  "id": 138,
  "avatar_url": "https://avatars3.githubusercontent.com/u/138?v=4"
},
{
  "login": "leahneukirchen",
  "id": 139,
  "avatar_url": "https://avatars3.githubusercontent.com/u/139?v=4"
},
{
  "login": "cheapRoc",
  "id": 140,
  "avatar_url": "https://avatars2.githubusercontent.com/u/140?v=4"
},
{
  "login": "technomancy",
  "id": 141,
  "avatar_url": "https://avatars2.githubusercontent.com/u/141?v=4"
},
{
  "login": "kenphused",
  "id": 142,
  "avatar_url": "https://avatars2.githubusercontent.com/u/142?v=4"
},
{
  "login": "rubyist",
  "id": 143,
  "avatar_url": "https://avatars2.githubusercontent.com/u/143?v=4"
},
{
  "login": "ogc",
  "id": 144,
  "avatar_url": "https://avatars2.githubusercontent.com/u/144?v=4"
},
{
  "login": "lazyatom",
  "id": 145,
  "avatar_url": "https://avatars2.githubusercontent.com/u/145?v=4"
},
{
  "login": "jdhuntington",
  "id": 147,
  "avatar_url": "https://avatars2.githubusercontent.com/u/147?v=4"
},
{
  "login": "nwebb",
  "id": 148,
  "avatar_url": "https://avatars3.githubusercontent.com/u/148?v=4"
},
{
  "login": "nsutton",
  "id": 149,
  "avatar_url": "https://avatars3.githubusercontent.com/u/149?v=4"
},
{
  "login": "sevenwire",
  "id": 150,
  "avatar_url": "https://avatars3.githubusercontent.com/u/150?v=4"
},
{
  "login": "brandonarbini",
  "id": 151,
  "avatar_url": "https://avatars3.githubusercontent.com/u/151?v=4"
},
{
  "login": "al3x",
  "id": 152,
  "avatar_url": "https://avatars3.githubusercontent.com/u/152?v=4"
},
{
  "login": "toolmantim",
  "id": 153,
  "avatar_url": "https://avatars3.githubusercontent.com/u/153?v=4"
},
{
  "login": "nicksieger",
  "id": 154,
  "avatar_url": "https://avatars3.githubusercontent.com/u/154?v=4"
},
{
  "login": "jicksta",
  "id": 155,
  "avatar_url": "https://avatars3.githubusercontent.com/u/155?v=4"
},
{
  "login": "joshsusser",
  "id": 156,
  "avatar_url": "https://avatars3.githubusercontent.com/u/156?v=4"
},
{
  "login": "jcrosby",
  "id": 157,
  "avatar_url": "https://avatars3.githubusercontent.com/u/157?v=4"
},
{
  "login": "thewoolleyman",
  "id": 158,
  "avatar_url": "https://avatars2.githubusercontent.com/u/158?v=4"
},
{
  "login": "technicalpickles",
  "id": 159,
  "avatar_url": "https://avatars2.githubusercontent.com/u/159?v=4"
},
{
  "login": "halbtuerke",
  "id": 160,
  "avatar_url": "https://avatars1.githubusercontent.com/u/160?v=4"
},
{
  "login": "ryanb",
  "id": 161,
  "avatar_url": "https://avatars1.githubusercontent.com/u/161?v=4"
},
{
  "login": "cnix",
  "id": 162,
  "avatar_url": "https://avatars1.githubusercontent.com/u/162?v=4"
},
{
  "login": "tpitale",
  "id": 163,
  "avatar_url": "https://avatars1.githubusercontent.com/u/163?v=4"
},
{
  "login": "cdcarter",
  "id": 164,
  "avatar_url": "https://avatars1.githubusercontent.com/u/164?v=4"
},
{
  "login": "atduskgreg",
  "id": 165,
  "avatar_url": "https://avatars1.githubusercontent.com/u/165?v=4"
},
{
  "login": "heff",
  "id": 166,
  "avatar_url": "https://avatars1.githubusercontent.com/u/166?v=4"
},
{
  "login": "entryway",
  "id": 167,
  "avatar_url": "https://avatars1.githubusercontent.com/u/167?v=4"
},
{
  "login": "aflatter",
  "id": 168,
  "avatar_url": "https://avatars0.githubusercontent.com/u/168?v=4"
},
{
  "login": "schofield",
  "id": 169,
  "avatar_url": "https://avatars0.githubusercontent.com/u/169?v=4"
},
{
  "login": "rbazinet",
  "id": 170,
  "avatar_url": "https://avatars0.githubusercontent.com/u/170?v=4"
},
{
  "login": "tranqy",
  "id": 171,
  "avatar_url": "https://avatars0.githubusercontent.com/u/171?v=4"
},
{
  "login": "robey",
  "id": 172,
  "avatar_url": "https://avatars0.githubusercontent.com/u/172?v=4"
},
{
  "login": "bkeepers",
  "id": 173,
  "avatar_url": "https://avatars0.githubusercontent.com/u/173?v=4"
},
{
  "login": "wilson",
  "id": 174,
  "avatar_url": "https://avatars0.githubusercontent.com/u/174?v=4"
},
{
  "login": "tommorris",
  "id": 175,
  "avatar_url": "https://avatars0.githubusercontent.com/u/175?v=4"
},
{
  "login": "charlesroper",
  "id": 176,
  "avatar_url": "https://avatars0.githubusercontent.com/u/176?v=4"
},
{
  "login": "adamwiggins",
  "id": 177,
  "avatar_url": "https://avatars0.githubusercontent.com/u/177?v=4"
},
{
  "login": "myobie",
  "id": 179,
  "avatar_url": "https://avatars1.githubusercontent.com/u/179?v=4"
},
{
  "login": "samgranieri",
  "id": 180,
  "avatar_url": "https://avatars1.githubusercontent.com/u/180?v=4"
},
{
  "login": "adam",
  "id": 181,
  "avatar_url": "https://avatars1.githubusercontent.com/u/181?v=4"
},
{
  "login": "mtodd",
  "id": 182,
  "avatar_url": "https://avatars1.githubusercontent.com/u/182?v=4"
},
{
  "login": "timcharper",
  "id": 183,
  "avatar_url": "https://avatars1.githubusercontent.com/u/183?v=4"
},
{
  "login": "paul",
  "id": 184,
  "avatar_url": "https://avatars1.githubusercontent.com/u/184?v=4"
},
{
  "login": "DocSavage",
  "id": 185,
  "avatar_url": "https://avatars1.githubusercontent.com/u/185?v=4"
},
{
  "login": "shane",
  "id": 186,
  "avatar_url": "https://avatars1.githubusercontent.com/u/186?v=4"
},
{
  "login": "vlucas",
  "id": 187,
  "avatar_url": "https://avatars1.githubusercontent.com/u/187?v=4"
},
{
  "login": "nex3",
  "id": 188,
  "avatar_url": "https://avatars0.githubusercontent.com/u/188?v=4"
},
{
  "login": "max-xx",
  "id": 189,
  "avatar_url": "https://avatars0.githubusercontent.com/u/189?v=4"
},
{
  "login": "norbauer",
  "id": 190,
  "avatar_url": "https://avatars0.githubusercontent.com/u/190?v=4"
},
{
  "login": "crigor",
  "id": 191,
  "avatar_url": "https://avatars0.githubusercontent.com/u/191?v=4"
},
{
  "login": "knowtheory",
  "id": 192,
  "avatar_url": "https://avatars0.githubusercontent.com/u/192?v=4"
},
{
  "login": "bernerdschaefer",
  "id": 193,
  "avatar_url": "https://avatars0.githubusercontent.com/u/193?v=4"
},
{
  "login": "zapnap",
  "id": 194,
  "avatar_url": "https://avatars0.githubusercontent.com/u/194?v=4"
},
{
  "login": "testdude",
  "id": 195,
  "avatar_url": "https://avatars0.githubusercontent.com/u/195?v=4"
},
{
  "login": "galinv",
  "id": 196,
  "avatar_url": "https://avatars0.githubusercontent.com/u/196?v=4"
},
{
  "login": "NZKoz",
  "id": 197,
  "avatar_url": "https://avatars0.githubusercontent.com/u/197?v=4"
},
{
  "login": "croaky",
  "id": 198,
  "avatar_url": "https://avatars1.githubusercontent.com/u/198?v=4"
},
{
  "login": "jeremy",
  "id": 199,
  "avatar_url": "https://avatars1.githubusercontent.com/u/199?v=4"
},
{
  "login": "ELLIOTTCABLE",
  "id": 200,
  "avatar_url": "https://avatars1.githubusercontent.com/u/200?v=4"
},
{
  "login": "monde",
  "id": 201,
  "avatar_url": "https://avatars1.githubusercontent.com/u/201?v=4"
},
{
  "login": "ryanbriones",
  "id": 202,
  "avatar_url": "https://avatars1.githubusercontent.com/u/202?v=4"
},
{
  "login": "wfarr",
  "id": 203,
  "avatar_url": "https://avatars1.githubusercontent.com/u/203?v=4"
},
{
  "login": "jseifer",
  "id": 204,
  "avatar_url": "https://avatars1.githubusercontent.com/u/204?v=4"
},
{
  "login": "symlink",
  "id": 205,
  "avatar_url": "https://avatars1.githubusercontent.com/u/205?v=4"
},
{
  "login": "sprsquish",
  "id": 206,
  "avatar_url": "https://avatars1.githubusercontent.com/u/206?v=4"
},
{
  "login": "codahale",
  "id": 207,
  "avatar_url": "https://avatars1.githubusercontent.com/u/207?v=4"
},
{
  "login": "zackchandler",
  "id": 208,
  "avatar_url": "https://avatars0.githubusercontent.com/u/208?v=4"
},
{
  "login": "jakehow",
  "id": 209,
  "avatar_url": "https://avatars0.githubusercontent.com/u/209?v=4"
},
{
  "login": "evan",
  "id": 210,
  "avatar_url": "https://avatars0.githubusercontent.com/u/210?v=4"
},
{
  "login": "olleolleolle",
  "id": 211,
  "avatar_url": "https://avatars0.githubusercontent.com/u/211?v=4"
},
{
  "login": "chrismcg",
  "id": 212,
  "avatar_url": "https://avatars0.githubusercontent.com/u/212?v=4"
},
{
  "login": "chuyeow",
  "id": 213,
  "avatar_url": "https://avatars0.githubusercontent.com/u/213?v=4"
},
{
  "login": "mloughran",
  "id": 214,
  "avatar_url": "https://avatars0.githubusercontent.com/u/214?v=4"
},
{
  "login": "matthewford",
  "id": 215,
  "avatar_url": "https://avatars0.githubusercontent.com/u/215?v=4"
},
{
  "login": "henrik",
  "id": 216,
  "avatar_url": "https://avatars0.githubusercontent.com/u/216?v=4"
},
{
  "login": "tkersey",
  "id": 217,
  "avatar_url": "https://avatars0.githubusercontent.com/u/217?v=4"
},
{
  "login": "acf",
  "id": 218,
  "avatar_url": "https://avatars1.githubusercontent.com/u/218?v=4"
},
{
  "login": "dan",
  "id": 219,
  "avatar_url": "https://avatars1.githubusercontent.com/u/219?v=4"
},
{
  "login": "seebq",
  "id": 220,
  "avatar_url": "https://avatars2.githubusercontent.com/u/220?v=4"
},
{
  "login": "delynn",
  "id": 221,
  "avatar_url": "https://avatars2.githubusercontent.com/u/221?v=4"
},
{
  "login": "spicycode",
  "id": 222,
  "avatar_url": "https://avatars2.githubusercontent.com/u/222?v=4"
},
{
  "login": "ntalbott",
  "id": 223,
  "avatar_url": "https://avatars2.githubusercontent.com/u/223?v=4"
},
{
  "login": "rdempsey",
  "id": 224,
  "avatar_url": "https://avatars2.githubusercontent.com/u/224?v=4"
},
{
  "login": "mjankowski",
  "id": 225,
  "avatar_url": "https://avatars2.githubusercontent.com/u/225?v=4"
},
{
  "login": "danahern",
  "id": 226,
  "avatar_url": "https://avatars2.githubusercontent.com/u/226?v=4"
},
{
  "login": "dctanner",
  "id": 227,
  "avatar_url": "https://avatars2.githubusercontent.com/u/227?v=4"
},
{
  "login": "alexvollmer",
  "id": 228,
  "avatar_url": "https://avatars3.githubusercontent.com/u/228?v=4"
},
{
  "login": "RailsAddict",
  "id": 229,
  "avatar_url": "https://avatars3.githubusercontent.com/u/229?v=4"
},
{
  "login": "scharfie",
  "id": 230,
  "avatar_url": "https://avatars3.githubusercontent.com/u/230?v=4"
},
{
  "login": "jhardy-deleteme",
  "id": 231,
  "avatar_url": "https://avatars3.githubusercontent.com/u/231?v=4"
},
{
  "login": "daikini",
  "id": 232,
  "avatar_url": "https://avatars3.githubusercontent.com/u/232?v=4"
},
{
  "login": "tdreyno",
  "id": 233,
  "avatar_url": "https://avatars3.githubusercontent.com/u/233?v=4"
},
{
  "login": "crispinheneise",
  "id": 234,
  "avatar_url": "https://avatars3.githubusercontent.com/u/234?v=4"
},
{
  "login": "jnunemaker",
  "id": 235,
  "avatar_url": "https://avatars3.githubusercontent.com/u/235?v=4"
},
{
  "login": "shayarnett",
  "id": 236,
  "avatar_url": "https://avatars3.githubusercontent.com/u/236?v=4"
},
{
  "login": "chad",
  "id": 237,
  "avatar_url": "https://avatars3.githubusercontent.com/u/237?v=4"
},
{
  "login": "superphly",
  "id": 238,
  "avatar_url": "https://avatars2.githubusercontent.com/u/238?v=4"
},
{
  "login": "swhitt",
  "id": 239,
  "avatar_url": "https://avatars2.githubusercontent.com/u/239?v=4"
},
{
  "login": "bryanl",
  "id": 240,
  "avatar_url": "https://avatars3.githubusercontent.com/u/240?v=4"
},
{
  "login": "jschairb",
  "id": 241,
  "avatar_url": "https://avatars3.githubusercontent.com/u/241?v=4"
},
{
  "login": "adelcambre",
  "id": 242,
  "avatar_url": "https://avatars3.githubusercontent.com/u/242?v=4"
},
{
  "login": "psi",
  "id": 243,
  "avatar_url": "https://avatars3.githubusercontent.com/u/243?v=4"
},
{
  "login": "watsonian",
  "id": 244,
  "avatar_url": "https://avatars3.githubusercontent.com/u/244?v=4"
},
{
  "login": "marcel",
  "id": 245,
  "avatar_url": "https://avatars3.githubusercontent.com/u/245?v=4"
},
{
  "login": "brapse",
  "id": 246,
  "avatar_url": "https://avatars3.githubusercontent.com/u/246?v=4"
},
{
  "login": "francois",
  "id": 247,
  "avatar_url": "https://avatars3.githubusercontent.com/u/247?v=4"
},
{
  "login": "aditya",
  "id": 248,
  "avatar_url": "https://avatars2.githubusercontent.com/u/248?v=4"
},
{
  "login": "agile",
  "id": 249,
  "avatar_url": "https://avatars2.githubusercontent.com/u/249?v=4"
},
{
  "login": "wellbredgrapefruit",
  "id": 250,
  "avatar_url": "https://avatars2.githubusercontent.com/u/250?v=4"
},
{
  "login": "toretore",
  "id": 251,
  "avatar_url": "https://avatars2.githubusercontent.com/u/251?v=4"
},
{
  "login": "vangberg",
  "id": 252,
  "avatar_url": "https://avatars2.githubusercontent.com/u/252?v=4"
},
{
  "login": "jchris",
  "id": 253,
  "avatar_url": "https://avatars2.githubusercontent.com/u/253?v=4"
},
{
  "login": "gspederson",
  "id": 254,
  "avatar_url": "https://avatars2.githubusercontent.com/u/254?v=4"
},
{
  "login": "psq",
  "id": 255,
  "avatar_url": "https://avatars2.githubusercontent.com/u/255?v=4"
},
{
  "login": "andreimaxim",
  "id": 256,
  "avatar_url": "https://avatars2.githubusercontent.com/u/256?v=4"
},
{
  "login": "robbyrussell",
  "id": 257,
  "avatar_url": "https://avatars2.githubusercontent.com/u/257?v=4"
},
{
  "login": "kommen",
  "id": 258,
  "avatar_url": "https://avatars3.githubusercontent.com/u/258?v=4"
},
{
  "login": "protocool",
  "id": 259,
  "avatar_url": "https://avatars3.githubusercontent.com/u/259?v=4"
},
{
  "login": "maddox",
  "id": 260,
  "avatar_url": "https://avatars0.githubusercontent.com/u/260?v=4"
},
{
  "login": "jswanner",
  "id": 261,
  "avatar_url": "https://avatars0.githubusercontent.com/u/261?v=4"
},
{
  "login": "kastner",
  "id": 262,
  "avatar_url": "https://avatars0.githubusercontent.com/u/262?v=4"
},
{
  "login": "halorgium",
  "id": 263,
  "avatar_url": "https://avatars0.githubusercontent.com/u/263?v=4"
},
{
  "login": "merb",
  "id": 264,
  "avatar_url": "https://avatars0.githubusercontent.com/u/264?v=4"
},
{
  "login": "lachie",
  "id": 265,
  "avatar_url": "https://avatars0.githubusercontent.com/u/265?v=4"
},
{
  "login": "anildigital",
  "id": 266,
  "avatar_url": "https://avatars0.githubusercontent.com/u/266?v=4"
},
{
  "login": "cwsaylor",
  "id": 267,
  "avatar_url": "https://avatars0.githubusercontent.com/u/267?v=4"
},
{
  "login": "pdsphil",
  "id": 268,
  "avatar_url": "https://avatars1.githubusercontent.com/u/268?v=4"
},
{
  "login": "kamal",
  "id": 269,
  "avatar_url": "https://avatars1.githubusercontent.com/u/269?v=4"
},
{
  "login": "bleything",
  "id": 270,
  "avatar_url": "https://avatars1.githubusercontent.com/u/270?v=4"
},
{
  "login": "pergesu",
  "id": 271,
  "avatar_url": "https://avatars1.githubusercontent.com/u/271?v=4"
},
{
  "login": "caplis",
  "id": 272,
  "avatar_url": "https://avatars1.githubusercontent.com/u/272?v=4"
},
{
  "login": "jqr",
  "id": 273,
  "avatar_url": "https://avatars1.githubusercontent.com/u/273?v=4"
},
{
  "login": "mattslack",
  "id": 274,
  "avatar_url": "https://avatars1.githubusercontent.com/u/274?v=4"
},
{
  "login": "tjogin",
  "id": 275,
  "avatar_url": "https://avatars1.githubusercontent.com/u/275?v=4"
},
{
  "login": "robbevan",
  "id": 276,
  "avatar_url": "https://avatars1.githubusercontent.com/u/276?v=4"
},
{
  "login": "marten",
  "id": 277,
  "avatar_url": "https://avatars1.githubusercontent.com/u/277?v=4"
},
{
  "login": "gnufied",
  "id": 278,
  "avatar_url": "https://avatars0.githubusercontent.com/u/278?v=4"
},
{
  "login": "hoverbird",
  "id": 279,
  "avatar_url": "https://avatars0.githubusercontent.com/u/279?v=4"
},
{
  "login": "beccasaurus",
  "id": 280,
  "avatar_url": "https://avatars0.githubusercontent.com/u/280?v=4"
},
{
  "login": "joshuamckenty",
  "id": 281,
  "avatar_url": "https://avatars0.githubusercontent.com/u/281?v=4"
},
{
  "login": "dfl",
  "id": 282,
  "avatar_url": "https://avatars0.githubusercontent.com/u/282?v=4"
},
{
  "login": "floydprice",
  "id": 283,
  "avatar_url": "https://avatars0.githubusercontent.com/u/283?v=4"
},
{
  "login": "alialliallie",
  "id": 284,
  "avatar_url": "https://avatars0.githubusercontent.com/u/284?v=4"
},
{
  "login": "activestylus",
  "id": 285,
  "avatar_url": "https://avatars0.githubusercontent.com/u/285?v=4"
},
{
  "login": "archfear",
  "id": 286,
  "avatar_url": "https://avatars0.githubusercontent.com/u/286?v=4"
},
{
  "login": "mudge",
  "id": 287,
  "avatar_url": "https://avatars0.githubusercontent.com/u/287?v=4"
},
{
  "login": "johnny",
  "id": 288,
  "avatar_url": "https://avatars1.githubusercontent.com/u/288?v=4"
},
{
  "login": "ss",
  "id": 290,
  "avatar_url": "https://avatars1.githubusercontent.com/u/290?v=4"
},
{
  "login": "ciconia",
  "id": 291,
  "avatar_url": "https://avatars1.githubusercontent.com/u/291?v=4"
},
{
  "login": "doudou",
  "id": 292,
  "avatar_url": "https://avatars1.githubusercontent.com/u/292?v=4"
},
{
  "login": "david",
  "id": 293,
  "avatar_url": "https://avatars1.githubusercontent.com/u/293?v=4"
},
{
  "login": "pedromg",
  "id": 294,
  "avatar_url": "https://avatars1.githubusercontent.com/u/294?v=4"
},
{
  "login": "wayne",
  "id": 295,
  "avatar_url": "https://avatars1.githubusercontent.com/u/295?v=4"
},
{
  "login": "Steve",
  "id": 296,
  "avatar_url": "https://avatars1.githubusercontent.com/u/296?v=4"
},
{
  "login": "mark",
  "id": 297,
  "avatar_url": "https://avatars1.githubusercontent.com/u/297?v=4"
},
{
  "login": "ambethia",
  "id": 298,
  "avatar_url": "https://avatars0.githubusercontent.com/u/298?v=4"
},
{
  "login": "halfbyte",
  "id": 299,
  "avatar_url": "https://avatars0.githubusercontent.com/u/299?v=4"
},
{
  "login": "cannikin",
  "id": 300,
  "avatar_url": "https://avatars1.githubusercontent.com/u/300?v=4"
},
{
  "login": "anthonylewis",
  "id": 301,
  "avatar_url": "https://avatars1.githubusercontent.com/u/301?v=4"
},
{
  "login": "markcornick",
  "id": 302,
  "avatar_url": "https://avatars1.githubusercontent.com/u/302?v=4"
},
{
  "login": "itfische",
  "id": 303,
  "avatar_url": "https://avatars1.githubusercontent.com/u/303?v=4"
},
{
  "login": "ivoencarnacao",
  "id": 304,
  "avatar_url": "https://avatars1.githubusercontent.com/u/304?v=4"
},
{
  "login": "mcg",
  "id": 305,
  "avatar_url": "https://avatars1.githubusercontent.com/u/305?v=4"
},
{
  "login": "sco",
  "id": 306,
  "avatar_url": "https://avatars1.githubusercontent.com/u/306?v=4"
},
{
  "login": "norio",
  "id": 307,
  "avatar_url": "https://avatars1.githubusercontent.com/u/307?v=4"
},
{
  "login": "anttih",
  "id": 308,
  "avatar_url": "https://avatars0.githubusercontent.com/u/308?v=4"
},
{
  "login": "vintrepid",
  "id": 309,
  "avatar_url": "https://avatars0.githubusercontent.com/u/309?v=4"
},
{
  "login": "bigfleet",
  "id": 310,
  "avatar_url": "https://avatars0.githubusercontent.com/u/310?v=4"
},
{
  "login": "lypanov",
  "id": 311,
  "avatar_url": "https://avatars0.githubusercontent.com/u/311?v=4"
},
{
  "login": "ropiku",
  "id": 312,
  "avatar_url": "https://avatars0.githubusercontent.com/u/312?v=4"
},
{
  "login": "rds",
  "id": 313,
  "avatar_url": "https://avatars0.githubusercontent.com/u/313?v=4"
},
{
  "login": "zmoazeni",
  "id": 314,
  "avatar_url": "https://avatars0.githubusercontent.com/u/314?v=4"
},
{
  "login": "edwinmoss",
  "id": 315,
  "avatar_url": "https://avatars0.githubusercontent.com/u/315?v=4"
},
{
  "login": "tomfarm",
  "id": 316,
  "avatar_url": "https://avatars0.githubusercontent.com/u/316?v=4"
},
{
  "login": "SoreGums",
  "id": 317,
  "avatar_url": "https://avatars0.githubusercontent.com/u/317?v=4"
},
{
  "login": "bumi",
  "id": 318,
  "avatar_url": "https://avatars1.githubusercontent.com/u/318?v=4"
}
]

/* GET home page. */


function ensureAuthenticated(req, res, next) {
  console.log("====>",req,user)
  console.log("====>",req)
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
};
export default (express, passport) => {
  const router = new express.Router();
router.get('/', ensureAuthenticated,function(req, res) {
  res.render('index', {page:'Home', menuId:'home',user: req.user });
});

// '/account' is only available to logged in user
// app.get('/account', ensureAuthenticated, function(req, res) {
//   res.render('account', { user: req.user });
// });

router.get('/login',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,                      // required
        failureRedirect: '/' 
      }
    )(req, res, next);
  },
  function(req, res) {
    log.info('Login was called in the Sample');
    res.redirect('/');
});

// 'GET returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// query (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
router.get('/auth/openid/return',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,                      // required
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    log.info('We received a return from AzureAD.');
    res.redirect('/');
  });

// 'POST returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// body (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
router.post('/auth/openid/return',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,                      // required
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    log.info('We received a return from AzureAD.');
    res.redirect('/');
  });

// 'logout' route, logout from passport, and destroy the session with AAD.
router.get('/logout', function(req, res){
  req.session.destroy(function(err) {
    req.logOut();
    res.redirect(config.destroySessionUrl);
  });
});


// router.get('/', function(req, res, next) {
//   res.render('index', {page:'Home', menuId:'home'});
// });

router.get('/about',ensureAuthenticated, function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/users',ensureAuthenticated, function(req, res, next) {
let processdata = _.map(data,item=>{
return {
  name:item.login,
  img:process.env.TRAFIC_MANAGER+'/images/'+item.login+'.png',
  imgerror:process.env.TRAFIC_MANAGER+'/images/'+item.login+'.jpg',
  alt:item.login,
  location:"US",
  type:"full time",
  id:item.id
}
})
  res.render('users', {page:'users', menuId:'users',data:processdata});
});

router.get('/user', ensureAuthenticated,function(req, res, next) {
  let processdata = _.map(data,item=>{
  return {
    name:item.login,
    img:process.env.TRAFIC_MANAGER+'/images/'+item.login+'.png',
    imgerror:process.env.TRAFIC_MANAGER+'/images/'+item.login+'.jpg',
    alt:item.login,
    location:"US",
    type:"full time",
    id:item.id
  }
  })

let final = _.find(processdata,item=>{
  return item.id===_.toNumber(req.query.id)
})
    res.render('user', {page:'user', menuId:'user',data:final});
  });

return router
};
