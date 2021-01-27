var MONSTER_MASTER = {
    monsterData : [
        {
            monsterID : "Aborideer" ,
            monsterFamily : "アボリディア" ,
            comment: "トナカイの戦士。トラップや集団戦など、頭を使った戦闘が得意。",
            rarity : "C" ,
            appropriate : { life : "D" ,power : "D" ,shield : "F",speed : "E" } ,
            ability : ["abt1","abt22"],
            abilityLv : [ 1 ,3 ],
            defaultParam : { life : 80 ,power : 50 ,shield : 40 , speed : 40 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Adarugon" ,
            monsterFamily : "アダルゴン" ,
            comment: "生まれたてドラゴン",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "D" ,shield : "D",speed : "E" } ,
            ability : ["abt1"],
            abilityLv : [ 1 ,3 ,5 ],
            defaultParam : { life : 70 ,power : 40 ,shield : 50 , speed : 60 },
            evoLine : "Undefined",
            evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Babygon" ,
            monsterFamily : "ベイビゴン" ,
            comment: "ドラゴンの赤ちゃん。無限の可能性を秘めている・・？気がする。",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "D" ,shield : "D",speed : "E" } ,
            ability : ["abt1"],
            abilityLv : [ 1 ,3 ,5 ],
            defaultParam : { life : 70 ,power : 40 ,shield : 50 , speed : 60 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Bechoime" ,
            monsterFamily : "ベチョイム" ,
            comment: "ぷるぷるした生き物。温厚だが油断をしていると毒液を吐き出すぞ！",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "F" ,shield : "F",speed : "E" } ,
            ability : ["abt1","abt7","abt8"],
            abilityLv : [1 ,2 ,5 ],
            defaultParam : { life : 100 ,power : 50 ,shield : 30 , speed : 50 },
            evoLine : "BechoimeKing" ,
    	      evoLv : "6",
            basic : true
        },{
            monsterID : "Bechoimeking" ,
            monsterFamily : "ベチョキング" ,
            comment: "ぷるぷる界の王様。修行の果てに気品と強さを手に入れた。",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "C" ,shield : "C",speed : "D" } ,
            ability : ["abt1","abt7","abt8"],
            abilityLv : [1 ,1 ,1],
            defaultParam : { life : 150 ,power : 65 ,shield : 45 , speed : 50 },
            evoLine : "Undefined" ,
    	      evoLv : "Undefined",
            basic : false
        },{
            monsterID : "Beetletank" ,
            monsterFamily : "カブトイド" ,
            comment: "有名な昆虫をモデルに作られた自律型戦闘兵器。装甲には自信アリ。",
            rarity : "B" ,
            appropriate : { life : "D" ,power : "C" ,shield : "B",speed : "C" } ,
            ability : ["abt1"],
            abilityLv : [1],
            defaultParam : { life : 100 ,power : 55 ,shield : 65 , speed : 50 },
            evoLine : "Undefined" ,
    	      evoLv : "Undefined",
            basic : false
        },{
            monsterID : "Blingo" ,
            monsterFamily : "ブリンゴ" ,
            comment: "邪悪で狡猾な種族。高い知能を持ち、武器や防具を装備することが出来る。",
            rarity : "C" ,
            appropriate : { life : "C" ,power : "C" ,shield : "E",speed : "D" } ,
            ability : ["abt1","abt4"],
            abilityLv : [1 ,5 ],
            defaultParam : { life : 80 ,power : 70 ,shield : 30 , speed : 40 },
            evoLine : "Killerblingo",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Blingolord" ,
            monsterFamily : "ブリンゴロード" ,
            comment: "ブリンゴ族のリーダー。冷酷で残忍であり、返り討ちにされた人間は数知れない。",
            rarity : "A" ,
            appropriate : { life : "B" ,power : "A" ,shield : "C",speed : "B" } ,
            ability : ["abt1","abt4","abt20","abt21"],
            abilityLv : [ 1 ,1 ,1 ,5 ],
            defaultParam : { life : 120 ,power : 120 ,shield : 60 , speed : 50 },
            evoLine : "Blingolord",
    	      evoLv : "10",
            basic : false
        },{
            monsterID : "Captainskull" ,
            monsterFamily : "キャプテン・スカル" ,
            comment: "宇宙海賊団スカル一味の船長！数多の小宇宙を股に掛ける残酷なカリスマ。",
            rarity : "A",
            appropriate : { life : "B" ,power : "A" ,shield : "C",speed : "B" },
            ability : ["abt1"],
            abilityLv : [ 1 ],
            defaultParam : { life : 150 ,power : 150 ,shield : 50 , speed : 80 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Chaser" ,
            monsterFamily : "チェイサー" ,
            comment: "宇宙の凶悪犯罪を追う正義の追跡者。まだまだ組織じゃ新人だ！",
            rarity : "C",
            appropriate : { life : "E" ,power : "D" ,shield : "E",speed : "C" },
            ability : ["abt1","abt10","abt12"],
            abilityLv : [ 1 ,3 ,5 ],
            defaultParam : { life : 50 ,power : 70 ,shield : 30 , speed : 40 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Chrysalis" ,
            monsterFamily : "トゲサリス" ,
            comment: "ツノムシの進化した姿。眠っているがしっかり戦えるぞ！",
            rarity : "B" ,
            appropriate : { life : "D" ,power : "C" ,shield : "D",speed : "E" } ,
            ability : ["abt1","abt22","abt4","abt8"],
            abilityLv : [1 ,1 ,1, 1],
            defaultParam : { life : 70 ,power : 65 ,shield : 65 , speed : 30 },
            evoLine : "Lindwurm" ,
    	      evoLv : 7,
            basic : false
        },{
            monsterID : "Cthulhu" ,
            monsterFamily : "クトゥルー" ,
            comment: "旧支配者。クトゥルーが再び姿を現したとき、この世が滅ぶという予言がある。",
            rarity : "A" ,
            appropriate : { life : "A" ,power : "A" ,shield : "A",speed : "C" } ,
            ability : ["abt1","abt23","abt24"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 230 ,power : 90,shield : 100 , speed : 40 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Fishman" ,
            monsterFamily : "ウオウ" ,
            comment: "陸地に打ち上げられた水生生物が、陸上でも生きられるように適応した。",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "F" ,shield : "E",speed : "D" } ,
            ability : ["abt1","abt8"],
            abilityLv : [ 1 ,4 ],
            defaultParam : { life : 100 ,power : 45 ,shield : 45 , speed : 50 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Flarered" ,
            monsterFamily : "ファイやレッド" ,
            comment: "人間が火を扱うことをあこがれた姿",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "F" ,shield : "E",speed : "D" } ,
            ability : ["abt1","abt8"],
            abilityLv : [ 1 ,4 ],
            defaultParam : { life : 100 ,power : 45 ,shield : 45 , speed : 50 },
            evoLine : "Undefined",
            evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Fukahirade" ,
            monsterFamily : "フカヒレイド" ,
            comment: "獲物を切り裂く水中の剣士。ヒレも牙も全てが凶器！",
            rarity : "B" ,
            appropriate : { life : "D" ,power : "B" ,shield : "C",speed : "A" } ,
            ability : ["abt1","abt4","abt17"],
            abilityLv : [1 ,2 ,5 ],
            defaultParam : { life : 90 ,power : 70 ,shield : 40 , speed : 90 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Genie" ,
            monsterFamily : "ランプのまじん" ,
            comment: "願いをかなえるランプの魔人のはず…だが？なぜだかダラダラしている。",
            rarity : "C" ,
            appropriate : { life : "D" ,power : "D" ,shield : "D",speed : "D" } ,
            ability : ["abt11"],
            abilityLv : [1],
            defaultParam : { life : 90 ,power : 50 ,shield : 30 , speed : 60 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Giant" ,
            monsterFamily : "ジャイアント" ,
            comment: "ある昔の巨人兵、目的を思い出し復活を遂げた",
            rarity : "C" ,
            appropriate : { life : "D" ,power : "D" ,shield : "D",speed : "D" } ,
            ability : ["abt11"],
            abilityLv : [1],
            defaultParam : { life : 90 ,power : 50 ,shield : 30 , speed : 60 },
            evoLine : "Undefined",
            evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Golem" ,
            monsterFamily : "ゴーレム" ,
            comment: "古代の魔法で作られた巨大な人形。力持ちで頼りになるぞ！",
            rarity : "B" ,
            appropriate : { life : "B" ,power : "B" ,shield : "B",speed : "D" } ,
            ability : ["abt1","abt4","abt5"],
            abilityLv : [1 ,2 ,5 ],
            defaultParam : { life : 120 ,power : 70 ,shield : 70 , speed : 30 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Herberus" ,
            monsterFamily : "ヘルべロス" ,
            comment: "地獄の番犬が飢えてこの世にやってきた",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "F" ,shield : "G",speed : "C" } ,
            ability : ["abt1","abt4","abt13"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 50 ,power : 70 ,shield : 25 , speed : 60 },
            evoLine : "Undefined",
            evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Hotdog" ,
            monsterFamily : "ホットドッグ" ,
            comment: "小学生に人気なアイツ。彼を主人公にしたアニメもある。",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "F" ,shield : "G",speed : "C" } ,
            ability : ["abt1","abt4","abt13"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 50 ,power : 70 ,shield : 25 , speed : 60 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Ibuki" ,
            monsterFamily : "イブキ" ,
            comment: "ニンジュツと呼ばれる風の魔法を扱う事に長けた東洋の戦士。",
            rarity : "C" ,
            appropriate : { life : "F" ,power : "B" ,shield : "F",speed : "B" } ,
            ability : ["abt1","abt7","abt19"],
            abilityLv : [ 1 ,3 ,5 ],
            defaultParam : { life : 80 ,power : 40 ,shield : 20 , speed : 50 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Ithaqua" ,
            monsterFamily : "イトハカ" ,
            comment: "旧支配者。「風」に乗る能力によって、宇宙を移動する。",
            rarity : "A" ,
            appropriate : { life : "A" ,power : "A" ,shield : "A",speed : "A" } ,
            ability : ["abt1","abt23","abt25"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 200 ,power : 100 ,shield : 70 , speed : 100 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Jiriri" ,
            monsterFamily : "ジりり" ,
            comment: "ニュース番組によく似ているマスコットキャラクター",
            rarity : "A" ,
            appropriate : { life : "A" ,power : "A" ,shield : "A",speed : "A" } ,
            ability : ["abt1","abt23","abt25"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 200 ,power : 100 ,shield : 70 , speed : 100 },
            evoLine : "Undefined",
            evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Killerblingo" ,
            monsterFamily : "キラーブリンゴ" ,
            comment: "ブリンゴの中でも特に能力が高く強い個体。手下のブリンゴ達の統率を取って戦う",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "C" ,shield : "C",speed : "C" } ,
            ability : ["abt1","abt4","abt20"],
            abilityLv : [1 ,1 ,5 ],
            defaultParam : { life : 100 ,power : 100 ,shield : 50 , speed : 50 },
            evoLine : "Blingolord",
    	      evoLv : "5",
            basic : false
        },{
            monsterID : "Kinichiro" ,
            monsterFamily : "キンイチロウ" ,
            comment: "生まれたときからの力持ち。山の中で彼のパワーに敵う動物はもういない！",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "B" ,shield : "B",speed : "D" },
            ability : ["abt1","abt6","abt18"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 200 ,power : 60 ,shield : 40 , speed : 10 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Lindwurm" ,
            monsterFamily : "リンドブルム" ,
            comment: "永い眠りから目覚めた〇〇の最終形態！もう誰も止められない！",
            rarity : "A" ,
            appropriate : { life : "B" ,power : "A" ,shield : "A",speed : "B" } ,
            ability : ["abt1","abt22","abt4","abt6"],
            abilityLv : [1 ,1 ,1, 1],
            defaultParam : { life : 200 ,power : 90 ,shield : 70 , speed : 70 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : false
        },{
            monsterID : "Lyris" ,
            monsterFamily : "リリ" ,
            comment: "魔界のアイドルっ！リリちゃんだよー！五月蠅い人間は魅了しちゃうよっ♡",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "B" ,shield : "D",speed : "B" } ,
            ability : ["abt1","abt17"],
            abilityLv : [ 1 ,3 ],
            defaultParam : { life : 80 ,power : 60 ,shield : 50 , speed : 70 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Maskednature" ,
            monsterFamily : "マスクド・ネイチャー" ,
            comment: "今若者の間で話題沸騰中の、森を愛するプロレスラー。",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "C" ,shield : "B",speed : "B" } ,
            ability : ["abt1","abt5","abt15"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 100 ,power : 70 ,shield : 40 , speed : 40 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Momosuke" ,
            monsterFamily : "モモスケ" ,
            comment: "東洋の昔話の世界から召喚された伝説の剣士。味方の動物は付いてこなかった。",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "C" ,shield : "C",speed : "C" } ,
            ability : ["abt1"],
            abilityLv : [ 1 ],
            defaultParam : { life : 100 ,power : 90 ,shield : 60 , speed : 40 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Mummy" ,
            monsterFamily : "ロッキー・マミー" ,
            comment: "格闘技に未練を残した男がミイラになった後に蘇った！",
            rarity : "C" ,
            appropriate : { life : "G" ,power : "C" ,shield : "D",speed : "F" } ,
            ability : ["abt1"],
            abilityLv : [ 1 ],
            defaultParam : { life : 50 ,power : 70 ,shield : 40 , speed : 40 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Pilebine" ,
            monsterFamily : "パイルバイン" ,
            comment: "長い年月、地中に埋まっていた古代兵器。主人を守るために再び動き出す。",
            rarity : "A" ,
            appropriate : { life : "B" ,power : "A" ,shield : "A",speed : "B" } ,
            ability : ["abt1","abt6","abt14"],
            abilityLv : [1 ,2 ,5 ],
            defaultParam : { life : 200 ,power : 130 ,shield : 50 , speed : 45 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Pixia" ,
            monsterFamily : "ピクシア" ,
            comment: "可愛い妖精さん。知性と魔力が高くいたずらが好き。",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "F" ,shield : "G",speed : "C" } ,
            ability : ["abt1","abt9","abt10","abt12"],
            abilityLv : [1 ,2 ,5 ,13],
            defaultParam : { life : 60 ,power : 60 ,shield : 30 , speed : 60 },
            evoLine : "Undefined" ,
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Rasyomon" ,
            monsterFamily : "ラショウモン" ,
            comment: "アンデッドとなった魔物の中でも最上位の種族",
            rarity : "A" ,
            appropriate : { life : "C" ,power : "A" ,shield : "B",speed : "B" } ,
            ability : ["abt1"],
            abilityLv : [1],
            defaultParam : { life : 70 ,power : 130 ,shield : 80 , speed : 70 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Ryuya" ,
            monsterFamily : "ロンヤ" ,
            comment: "場違いなヤツを召喚してしまった！コイツはモンスターではない！",
            rarity : "C" ,
            appropriate : { life : "F" ,power : "G" ,shield : "F",speed : "G" } ,
            ability : ["abt1"],
            abilityLv : [1],
            defaultParam : { life : 50 ,power : 50 ,shield : 30 , speed : 50 },
            evoLine : "Ryuyasoldier" ,
    	      evoLv : "5",
            basic : false
        },{
            monsterID : "Ryuyasoldier" ,
            monsterFamily : "ロンヤソルジャー" ,
            comment: "弱き人間はモンスターに抵抗するために剣を握ってみた。",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "E" ,shield : "F",speed : "E" } ,
            ability : ["abt1"],
            abilityLv : [1],
            defaultParam : { life : 65 ,power : 60 ,shield : 40 , speed : 60 },
            evoLine : "Ryuyaraptor" ,
    	      evoLv : "5",
            basic : false
        },{
            monsterID : "Ryuyaraptor" ,
            monsterFamily : "ロンヤラプトル" ,
            comment: "気付いたのだ。人間は力ではなく知恵と科学で高みを目指すべきだと。",
            rarity : "B" ,
            appropriate : { life : "B" ,power : "B" ,shield : "C",speed : "E" } ,
            ability : ["abt1"],
            abilityLv : [1],
            defaultParam : { life : 75 ,power : 70 ,shield : 50 , speed : 60 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : false
        },{
            monsterID : "Sapphivern" ,
            monsterFamily : "サファイバーン" ,
            comment: "伝説の蒼い翼竜。その口から放たれる火炎は広野を一瞬で焼き尽くす。",
            rarity : "A" ,
            appropriate : { life : "B" ,power : "B" ,shield : "B",speed : "C" } ,
            ability : ["abt1","abt17","abt13"],
            abilityLv : [1 ,2 ,5 ],
            defaultParam : { life : 180 ,power : 100 ,shield : 60 , speed : 60 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Senra" ,
            monsterFamily : "センラ" ,
            comment: "センラは昔、仏道に背いて悪事を働いた破戒僧が残留思念体となった姿である。",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "C" ,shield : "C",speed : "D" } ,
            ability : ["abt1"],
            abilityLv : [1],
            defaultParam : { life : 55 ,power : 60 ,shield : 45 , speed : 55 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : false
        },{
            monsterID : "Taurusborg" ,
            monsterFamily : "タウロスボーグ" ,
            comment: "秘密の研究によって生み出された計り知れないパワーと知性を持つ牛のサイボーグ。",
            rarity : "A" ,
            appropriate : { life : "B" ,power : "A" ,shield : "B",speed : "C" } ,
            ability : ["abt1","abt6","abt15"],
            abilityLv : [1 ,2 ,5 ],
            defaultParam : { life : 150 ,power : 110 ,shield : 50 , speed : 50 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Ungyo" ,
            monsterFamily : "ウンギョ" ,
            comment: "体の一部が煙と一体化、煙を操ることができる",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "C" ,shield : "C",speed : "C" } ,
            ability : ["abt1","abt9","abt12"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 50 ,power : 100 ,shield : 60 , speed : 50 },
            evoLine : "Undefined",
            evoLv : "Undefined",
            basic : true
        },{
            monsterID : "Unsui" ,
            monsterFamily : "アンスイ" ,
            comment: "超霊媒体質であるアンスイは、その身に取り憑いた殺戮者の邪霊に抗う為に修行に身を置く。",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "C" ,shield : "C",speed : "C" } ,
            ability : ["abt1","abt9","abt12"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 50 ,power : 100 ,shield : 60 , speed : 50 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        },{
            monsterID : "ViperKong" ,
            monsterFamily : "ヴェイパーキング" ,
            comment: "地の果てを這うようになってしまったキング、荒れ果てた姿は昔の姿を想像できない",
            rarity : "B" ,
            appropriate : { life : "C" ,power : "C" ,shield : "C",speed : "C" } ,
            ability : ["abt1","abt9","abt12"],
            abilityLv : [ 1 ,2 ,5 ],
            defaultParam : { life : 50 ,power : 100 ,shield : 60 , speed : 50 },
            evoLine : "Undefined",
            evoLv : "Undefined",
            basic : true
            },{
            monsterID : "Worm" ,
            monsterFamily : "ツノムシ" ,
            comment: "大きなツノがチャームポイントのムシ。触ると超危険！",
            rarity : "C" ,
            appropriate : { life : "E" ,power : "E" ,shield : "E",speed : "E" } ,
            ability : ["abt1","abt22","abt4"],
            abilityLv : [1 ,3 ,5 ],
            defaultParam : { life : 50 ,power : 60 ,shield : 50 , speed : 30 },
            evoLine : "Chrysalis",
    	      evoLv : 3,
            basic : true
        },{
            monsterID : "Yanchicken" ,
            monsterFamily : "メンチキ" ,
            comment: "ニワトリ界のバッドガイ！",
            rarity : "C" ,
            appropriate : { life : "F" ,power : "E" ,shield : "D",speed : "C" } ,
            ability : ["abt1"],
            abilityLv : [1],
            defaultParam : { life : 45 ,power : 60 ,shield : 40 , speed : 50 },
            evoLine : "Undefined",
    	      evoLv : "Undefined",
            basic : true
        }
    ]
};