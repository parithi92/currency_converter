/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        /*if(localStorage.getItem("login")!='true'){
            window.location.href="login.html";
        }*/
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    }
};

$(document).ready(function(){
    $("#login").click(function(){
        var url = "http://192.168.0.140/sample_api/login.php";
        var username = $.trim($("#username").val());
        var password = $.trim($("#password").val());
        var dataString = "username="+username+"&password="+password;
        
        if(username.length>0 && password.length>0){
            $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function(){ $("#login").val("Connecting...")},
                success: function(data){
                    
                    if(data=='success')
                    {
                        localStorage.login="true";
                        localStorage.username=username;
                        window.location.href="home.html";
                    }else if(data=="failed"){
                        alert("Login Error");
                        $("#login").html("Login");
                    }
                }

            });
        }else{
            alert("Please enter all the field");
        }
    });

    $("#logout").click(function(){
        localStorage.login="false";
        window.location.href = "login.html";
    });
});