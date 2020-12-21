var MONSTER_MASTER = {
    monsterData : [
        {
            "monsterID" : "bechoime" ,
            "monsterFamily" : "ベチョイム" ,
            "comment": "もちもちした生き物。温厚だが油断をしていると毒液を吐き出すぞ！",
            "rarity" : "C" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "F","speed" : "E" } ,
            "ability" : { "1" : "abt1" } ,
            "defaultParam" : { "life" : 50 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },
        {
            "monsterID" : "Pixia" ,
            "monsterFamily" : "ピクシア" ,
            "comment": "可愛い妖精さん。知性と魔力が高くいたずらが好き。",
            "rarity" : "C" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt2"} ,
            "defaultParam" : { "life" : 40 ,"power" : 6 ,"shield" : 4 , "speed" : 7 },
            "basic" : true
        },
        {
            "monsterID" : "blingo" ,
            "monsterFamily" : "ブリンゴ" ,
            "comment": "邪悪で狡猾な種族。高い知能を持ち、武器や防具を装備することが出来る。",
            "rarity" : "C" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },
        {
            "monsterID" : "Golem" ,
            "monsterFamily" : "ゴーレム" ,
            "comment": "古代の魔法で作られた巨大な人形。力持ちで頼りになるぞ！",
            "rarity" : "B" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },
        {
            "monsterID" : "Worm" ,
            "monsterFamily" : "ツノムシ" ,
            "comment": "大きなツノがチャームポイントのムシ。触ると超危険！",
            "rarity" : "C" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "evoLine" : "chrysalis" ,
    	    "evoLv" : 3,
            "basic" : true
        },
        {
            "monsterID" : "chrysalis" ,
            "monsterFamily" : "トゲサリス" ,
            "comment": "ツノムシの進化した姿。眠っているがしっかり戦えるぞ！",
            "rarity" : "B" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "evoLine" : "Lindwurm" ,
    	    "evoLv" : 7,
            "basic" : false
        },
        {
            "monsterID" : "Lindwurm" ,
            "monsterFamily" : "リンドブルム" ,
            "comment": "永い眠りから目覚めた〇〇の最終形態！もう誰も止められない！",
            "rarity" : "A" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : false
        },
        {
            "monsterID" : "fukahirade" ,
            "monsterFamily" : "フカヒレイド" ,
            "comment": "獲物を切り裂く水中の剣士。ヒレも牙も全てが凶器！",
            "rarity" : "B" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },
        {
            "monsterID" : "Genie" ,
            "monsterFamily" : "ランプのまじん" ,
            "comment": "願いをかなえるランプの魔人のはず…だが？なぜだかダラダラしている。",
            "rarity" : "C" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },
        {
            "monsterID" : "sapphivern" ,
            "monsterFamily" : "サファイバーン" ,
            "comment": "伝説の蒼い翼竜。その口から放たれる火炎は広野を一瞬で焼き尽くす。",
            "rarity" : "A" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },
        {
            "monsterID" : "Taurusborg" ,
            "monsterFamily" : "タウロスボーグ" ,
            "comment": "秘密の研究によって生み出された計り知れないパワーと知性を持つ牛のサイボーグ。",
            "rarity" : "A" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },
        {
            "monsterID" : "pilebine" ,
            "monsterFamily" : "パイルバイン" ,
            "comment": "長い年月、地中に埋まっていた古代兵器。主人を守るために再び動き出す。",
            "rarity" : "A" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },
        {
            "monsterID" : "Maskednature" ,
            "monsterFamily" : "マスクド・ネイチャー" ,
            "comment": "長い年月、地中に埋まっていた古代兵器。主人を守るために再び動き出す。",
            "rarity" : "B" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },{
            "monsterID" : "hotdog" ,
            "monsterFamily" : "ホットドッグ" ,
            "comment": "若者に人気なアイツ。彼を主人公にしたアニメもある。",
            "rarity" : "C" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },{
            "monsterID" : "Aborideer" ,
            "monsterFamily" : "アボリディア" ,
            "comment": "トナカイの戦士。トラップや集団戦など、頭を使った戦闘が得意。",
            "rarity" : "C" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : [ "abt1" ,"abt4" ,"abt9" ] ,
            "abilityLv" : [ 1 ,2 ,5 ] ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },{
            "monsterID" : "fishman" ,
            "monsterFamily" : "フィッシュマン" ,
            "comment": "陸地に打ち上げられた水生生物が、陸上でも生きられるように適応した。",
            "rarity" : "C" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        },{
            "monsterID" : "Lyris" ,
            "monsterFamily" : "リリ" ,
            "comment": "魔界のアイドルっ！リリちゃんだよー！五月蠅い人間は魅了しちゃうよっ♡",
            "rarity" : "B" ,
            "appropriate" : { "life" : "E" ,"power" : "F" ,"shield" : "G","speed" : "C" } ,
            "ability" : { "1" : "abt1"} ,
            "defaultParam" : { "life" : 20 ,"power" : 5 ,"shield" : 5 , "speed" : 5 },
            "basic" : true
        }
    ]
};