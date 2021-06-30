function launchPod(){
    let podName = document.getElementById("i1").value;
    let imageName = document.getElementById("i2").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://10.0.2.15/cgi-bin/server.py?var=kubectl run ${podName} --image=${imageName}`, true);
    xhr.send();
    xhr.onload = function (){
      var output=xhr.responseText; 
      document.getElementById("d1").innerHTML=output; 

    }
}
function getresource(){
    let xhr = new XMLHttpRequest();
    let unique = document.getElementById("i12").value;
    let resourceName = document.getElementById("i11").value;
    xhr.open("GET", `http://10.0.2.15/cgi-bin/kube.py?var=kubectl get  ${resourceName} ${unique} `, true);
    xhr.send();
    xhr.onload = function (){
      var output=xhr.responseText; 
      document.getElementById("d1").innerHTML=output;
    }
}

function launchDeployment(){
    let deploymentName = document.getElementById("i3").value;
    let imageName = document.getElementById("i4").value;
    
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://10.0.2.15/cgi-bin/kube.py?var=kubectl create deployment ${deploymentName}  --image=${imageName}`, true);
    xhr.send();
    xhr.onload = function (){
      var output=xhr.responseText; 
      document.getElementById("d1").innerHTML=output;
    }
}

function exposeService(){
    let deploymentName = document.getElementById("i5").value;
     
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://10.0.2.15/cgi-bin/kube.py?var=kubectl expose deployment ${deploymentName} --port=80 --type=NodePort`, true);
    xhr.send();
    xhr.onload = function (){
      var output=xhr.responseText; 
      document.getElementById("d1").innerHTML=output;
    }
}

function removeService(){
    let anything = document.getElementById("i10").value;
    let serviceName = document.getElementById("i9").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://10.0.2.15/cgi-bin/kube.py?var=kubectl delete ${serviceName} ${anything}`, true);
    xhr.send();
    xhr.onload = function (){
      var output=xhr.responseText; 
      document.getElementById("d5").innerHTML=output;
    }
}

function deleteall(){
   
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `http://10.0.2.15/cgi-bin/kube.py?var=kubectl delete all --all`, true);
  xhr.send();
  xhr.onload = function (){
    var output=xhr.responseText; 
    document.getElementById("d5").innerHTML=output;
  }
}