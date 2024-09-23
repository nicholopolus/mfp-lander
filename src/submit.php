<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
//unset($_POST['address2']);


// if ($_POST['hpverify'] == '') {
//     return;
// }
$_POST['submitted'] = gmdate("Y-m-d\TH:i:s\Z");
extract($_POST);
	$post = array(
        "submitted" => gmdate("Y-m-d\TH:i:s\Z"),
	 "hpverify" =>$hpverify,
	 "homeowner"=>$homeowner,
	 "rooftype"=>$rooftype,
	 "billsize"=>$billsize,
	 "solarbefore"=>$solarbefore,
	 "zipStart"=>$zipStart,
	 "fulladdress"=>$fulladdress,
	 "streetnumber"=>$streetnumber,
	 "streetname"=>$streetname,
	 "city"=>$city,
	 "state"=>$state,
	  "postcode"=>$postcode,
	 "phone"=>$phone,
	 "phone_full"=>$phone_full,
	 "country_code"=>$country_code,
	 "verify"=>$verify,
	 "firstname"=>$firstname,
	 "lastname"=>$lastname,
	 "email"=>$email,
	 "xxTrustedFormCertUrl"=>$xxTrustedFormCertUrl,
	 );
	 file_put_contents(gmdate('Y-m-d H:i:s'). '.json', json_encode($_POST));
	$ch = curl_init();
	//$service_url = 'https://n8n.solarcompare.com/webhook-test/18375464-4542-4bb3-82cc-b7a9515a2ae4';
    $service_url = 'https://n8n.solarcompare.com/webhook/3b08d9c1-ba9b-48e7-9a6c-6ed9d150216a';
	$headers = array();
	$headers[] = 'Content-Type:application/x-www-form-urlencoded';
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($_POST));
	curl_setopt($ch, CURLOPT_URL,$service_url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$result = curl_exec($ch);
	$response = $result;