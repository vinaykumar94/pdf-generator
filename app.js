

function outputname(){
            
    /*/  var temp1Obj = {};
        temp1Obj["Name"] = $('form#register input[Name="name"]').val();*/


 var html = '<table align="left" border="0" cellpadding="0" cellspacing="0" style="border:2px solid #E3E2E2; width:100%">'+
                '<tbody>'+
            '<tr style="background:rgb(36, 35, 35);color:#F8F0F0;text-align:center;font-size:25px;">'+
            '<td>edWisor</td>'+
             '</tr>'+
             '<tr>'+
          '<td style="padding:2%;">&nbsp;'+
          '<h3>Dear Test</h3>'+

            '<h3>We just wanted to remind you about your live training coming up</h3>'+
            '<h3>Your live training - '+' starts '+' </h3>'+
            '<h3><a href="https://edwisor.com/myskills.html">Click here to go to your My Skills page and checkout this training details</a></h3>'+
            '<h4>Please try to be online 5 minutes before the training schedule</h4>'+                      
            '<h5>In case of doubts or queries, you can reach us at +91 8588837942 or just reply to this email and we will get back to you</h5><br />'+
             'Cheers,&nbsp;<br />'+
             'edWisor Team.</h3>'+
             '</td>'+
              '</tr>'+
              '<tr style="width:100%;background:#EFEFEF">'+
              '<td style="padding:2%;">'+
             '<p><em>Copyright &copy; 2015 Saraswati Digital Pvt. Ltd. All rights reserved.</em>&nbsp;</p>'+
               '<p><br />'+
                '</td>'+
            '</tr>'+
                '</tbody>'+
            '</table>'



        return html;




}// end training email
outputname();