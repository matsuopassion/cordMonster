// This is a JavaScript file

//mobile backendのAPIキーを設定
var ncmb = new NCMB("3925d11119b38c18840a1d49b2250589b9463bb1e4a012db5b3dbb1564926525","5f0c1d723a10ea40ca022455e9c7f2e48ccb2d4e55c0765a5e3af32944e5919c");

//データをmobile backendに保存するメソッド
function saveData(){
    //クラス名を指定して新規クラスを作成
    var Data = ncmb.DataStore("Data");

    //Dataクラスのインスタンスを作成
    var data = new Data();

    //作成したインスタンスのaisatsuというフィールドに文字データを設定
    data.set("aisatsu", "hello, world!");

    //設定したデータをmobile backendに保存
    data.save()
        .then(function(object) {
              //成功する時の処理
              console.log("データ保存に成功!");
          })
        .catch(function(error) {
              //エラーが発生する時の処理
              console.log("error:" + error.message);
          });
}