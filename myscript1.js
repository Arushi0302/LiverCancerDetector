name1 = document.getElementById("name");
email = document.getElementById("email");
age = document.getElementById("age");
gender = document.getElementById("gender");
i1 = document.getElementById("i1");
i2 = document.getElementById("i2");
i3 = document.getElementById("i3");
i4 = document.getElementById("i4");
i5 = document.getElementById("i5");
i6 = document.getElementById("i6");
i7 = document.getElementById("i7");
i8 = document.getElementById("i8");

function responce_data(res){
    res.then(data => {
        console.log("Result = ", data.result);
        // alert(data.result);
        if(data.result == 1){
            g = "Male";
            if(gender.value == 0){
                g = "Female";
            }
            res = data.result;
            lc = "LIVER CANCER NOT DETECTED"
            if(res == 1){
                lc = "LIVER CANCER DETECTED"
            }
            var queryString = "?Name=" + name1.value + "&Email=" + email.value + "&Age=" + age.value + "&Gender=" + g + "&Total_Bilirubin=" + i1.value + "&Direct_Bilirubin=" + i2.value + "&Alkaline_Phosphate=" + i3.value + "&Total_Protiens=" + i4.value + "&Albumin=" + i5.value + "&Albumin_and_Globulin_Ratio=" + i6.value  + "&Alamine_Aminotransferase=" + i7.value  + "&Aspartate_Aminotransferase=" + i8.value + "&Result=" + lc   ;
            window.open("predict.html" + queryString);
        }
        else{
            res = data.result;
            g = "Male";
            if(gender.value == 0){
                g = "Female";
            }
            lc = "LIVER CANCER NOT DETECTED"
            if(res == 1){
                lc = "LIVER CANCER DETECTED"
            }
            var queryString = "?Name=" + name1.value + "&Email=" + email.value + "&Age=" + age.value + "&Gender=" + g + "&Total_Bilirubin=" + i1.value + "&Direct_Bilirubin=" + i2.value + "&Alkaline_Phosphate=" + i3.value + "&Total_Protiens=" + i4.value + "&Albumin=" + i5.value + "&Albumin_and_Globulin_Ratio=" + i6.value  + "&Alamine_Aminotransferase=" + i7.value  + "&Aspartate_Aminotransferase=" + i8.value + "&Result=" + lc   ;
            window.open("predict1.html" + queryString);
        }
        // Play with your data
        // if result == -1 it means some error have occured
        // if result == 0 it means person is healthy
        // if result == 1 it means person is unhealthy
    });
}
  
async function postData(url = '', data = {}){
    const responce = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    });

    responce_data(responce.json());
}

function predict(){
    postData('https://livercancer.herokuapp.com/livercancer-API', {
        Age: age.value,
        Total_Bilirubin: i1.value,
        Direct_Bilirubin: i2.value,
        Alkaline_Phosphate: i3.value,
        Alamine_Aminotransferase: i7.value,
        Aspartate_Aminotransferase: i8.value,
        Total_Protiens: i4.value,
        Albumin: i5.value,
        Albumin_and_Globulin_Ratio: i6.value,
        Gender: gender.value // Male: 1, Female: 0
    });
}

