// JavaScript Document

    // 入力内容チェックのための関数
    function input_check(){
    var result = true;
 
    // エラー用装飾のためのクラスリセット
    $('#name').removeClass("inp_error");
    $('#mail').removeClass("inp_error");
    $('#msg').removeClass("inp_error");
 
    // 入力エラー文をリセット
    $("#name_error").empty();
    $("#mail_error").empty();
    $("#msg_error").empty();
 
    // 入力内容セット
    var name   = $("#name").val();
    var mail  = $("#mail").val();
    var msg  = $("#msg").val();
 
    // 入力内容チェック
 
    // お名前
    if(name == ""){
        $("#name_error").html("<i class='fa fa-exclamation-circle'></i> お名前は必須です。");
        $("#name").addClass("inp_error");
        result = false;
    }else if(name.length > 25){
        $("#name_error").html("<i class='fa fa-exclamation-circle'></i> お名前は25文字以内で入力してください。");
        $("#name").addClass("inp_error");
        result = false;
    }

    // メールアドレス
    if(mail == ""){
        $("#mail_error").html("<i class='fa fa-exclamation-circle'></i> メールアドレスは必須です。");
        $("#mail").addClass("inp_error");
        result = false;
    }else if(mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
        $('#mail_error').html("<i class='fa fa-exclamation-circle'></i> 正しいメールアドレスを入力してください。");
        $("#mail").addClass("inp_error");
        result = false;
    }else if(mail.length > 255){
        $('#mail_error').html("<i class='fa fa-exclamation-circle'></i> 正しいメールアドレスを入力してください。");
        $("#mail").addClass("inp_error");
        result = false;
    }
    
    // お問い合わせ内容
    if(msg == ""){
        $("#msg_error").html("<i class='fa fa-exclamation-circle'></i> お問い合わせ内容は必須です。");
        $("#msg").addClass("inp_error");
        result = false;
    }else if(msg.match(/[<(.*)>.*<\/\1>]/)){
        $('#msg_error').html("<i class='fa fa-exclamation-circle'></i> HTML、URLの貼りつけは禁止しています。");
        $("#msg").addClass("inp_error");
        result = false;
    }else if(msg.match(/^[ 　\r\n\t]*$/)){
        $('#msg_error').html("<i class='fa fa-exclamation-circle'></i> お問い合わせ内容は必須です。");
        $("#msg").addClass("inp_error");
        result = false;
    }
 
    return result;
}