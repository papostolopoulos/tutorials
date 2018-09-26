// For the date:
//Userful when the expiring date is in the footer, along with currency information
function transform(data) {
  //---PHASE 1---
  //Regular expression strings and array with all string scenarios
  var regEx1 = new RegExp("valid\\sthrough:?\\s"); //valid through(:)
  var regEx2 = new RegExp("expires:?\\s"); //expires(:)
  var regEx3 = new RegExp("until:?\\s"); //until(:)
  var regEx4 = new RegExp("offer\\sends:?\\s"); //offer ends(:)
  var regExArr = [regEx1, regEx2, regEx3, regEx4];

  var dateRegEx = new RegExp("([\\d\\/]{2,3}){2}([\\d]{2,4})?"); // (N)N/(N)N/(NNNN)
  var flags = "i"; //Can be i, gi, g



  //---PHASE 2---
  //Create the new Array -> expirTextArr. Push all the regular expressions inside
  var expirTextArr = [];
  for (var i = 0; i < regExArr.length; i++) {
    expirTextArr.push(new RegExp (regExArr[i].source + dateRegEx.source, flags));
  }



  //---PHASE 3---
  //String where the extracted (N)N/(N)N/(NNNN) is added. Then the string is split to an array.
  var finalStrArr = "";
  //loop through all the regular expressions inside the expirTextArr to see if there is a match
  //If there is a match, then add the (N)N/(N)N/(NNNN) in finalStrArr and split it.
  for (var i = 0; i < expirTextArr.length; i++) {
   var el = expirTextArr[i];

   if (data.match(el)) {
    finalStrArr= data.match(el)[0].split(" ")[1].split("/");
     break;
   }
  }



  //---PHASE 4---
  //If $ is in the "data" string, then make mm/yy/yyyy. If € or £ then twist the order of the array elements
  if (data.match(/\$/)) return new Date(finalStrArr[0] + "/" + finalStrArr[1] + "/" + finalStrArr[2] || "1970");
  if (data.match(/[£€]/)) return new Date(finalStrArr[1] + "/" + finalStrArr[0] + "/" + finalStrArr[2] || "1970");
  return "";
}






//LANDSEND COUPONS
{
  "extract": {
    "extractEmbedded": false,
    "source": null,
    "schema": [
      {
        "url": "http://ws.rmf.yahoo.com:4080/rmf/v1/schema?type=schema.org&name=y.2.0&format=json",
        "ns": "http://schema.org",
        "context": {
          "@type": [
            "Coupon"
          ]
        }
      }
    ],
    "entityRules": [
      {
        "id": "d0ebaf19-eb36-448f-92d0-2f1fe2b81936",
        "repeating": true,
        "locations": [
          "/descendant::a[contains(.,\"%\") and not (contains(.,\"Last day!\") or contains(.,\"Take\")) \nor contains(.,\"FREE SHIPPING\")]\n"
        ],
        "type": "http://schema.org/Coupon",
        "javascript": null,
        "entityIdRef": "",
        "attributes": [
          {
            "repeating": false,
            "locations": {
              "-1": [
                {
                  "xpath": "."
                }
              ]
            },
            "name": "http://schema.org/description",
            "relative": true,
            "transient": false,
            "javascript": "function transform(data) {\n return data.replace(/^\\+/, \"\").trim() || \"\";\n}",
            "dataTypes": [
              "Text"
            ],
            "mandatory": false
          },
          {
            "repeating": false,
            "locations": {
              "-1": [
                {
                  "xpath": "/descendant::span[contains(text(),\"valid through\") or contains(text(),\"Valid through\")]\n|\n/descendant::p[contains(text(),\"valid through\") or contains(text(),\"Valid through\")]"
                }
              ]
            },
            "name": "http://schema.org/validThrough",
            "relative": true,
            "transient": false,
            "javascript": "function transform(data) {\n\tdata = data.match(/valid\\sthrough[\\w\\s:]+p\\.m\\.[\\w\\s,]+\\./gi)[0].split(\",\");\n\tvar result = data[1] + \",\" + data[2];\n\treturn result || \"\";\n}",
            "dataTypes": [
              "DateTime"
            ],
            "mandatory": false
          },
          {
            "repeating": false,
            "locations": {
              "-1": [
                {
                  "xpath": "/descendant::a[contains(.,\"%\") or contains(.,\"FREE SHIPPING\")]/@href"
                }
              ]
            },
            "name": "http://schema.org/url",
            "relative": true,
            "transient": false,
            "javascript": null,
            "dataTypes": [
              "URL"
            ],
            "mandatory": false
          }
        ]
      },
      {
        "id": "51009acc-e604-4bb0-83c1-ba5ec5e44e33",
        "repeating": true,
        "locations": [
          "/descendant::a[contains(.,\"%\") or contains(.,\"FREE SHIPPING\")]\n"
        ],
        "type": "http://schema.org/Organization",
        "javascript": null,
        "entityIdRef": "",
        "attributes": [
          {
            "repeating": false,
            "locations": {
              "-1": [
                {
                  "xpath": "\"LANDS' END\""
                }
              ]
            },
            "name": "http://schema.org/name",
            "relative": true,
            "transient": false,
            "javascript": null,
            "dataTypes": [
              "Text"
            ],
            "mandatory": false
          }
        ]
      }
    ],
    "edgeRules": [
      {
        "from": {
          "entityRule": "d0ebaf19-eb36-448f-92d0-2f1fe2b81936",
          "matchAttr": ""
        },
        "to": {
          "entityRule": "51009acc-e604-4bb0-83c1-ba5ec5e44e33",
          "matchAttr": ""
        },
        "predicate": "http://schema.org/broker",
        "cardinality": "ONE_TO_ONE"
      }
    ],
    "entityNS": null
  },
  "metaData": {
    "useVTDXML": "true",
    "ignoredValidations": null
  }
}




//LANDSEND -  ONLY TOP OF EMAIL
{
  "extract": {
    "extractEmbedded": false,
    "source": null,
    "schema": [
      {
        "url": "http://ws.rmf.yahoo.com:4080/rmf/v1/schema?type=schema.org&name=y.2.0&format=json",
        "ns": "http://schema.org",
        "context": {
          "@type": [
            "Coupon"
          ]
        }
      }
    ],
    "entityRules": [
      {
        "id": "d0ebaf19-eb36-448f-92d0-2f1fe2b81936",
        "repeating": true,
        "locations": [
          "/descendant::a[contains(.,\"%\") and not (contains(.,\"Last day!\")) and contains(.,\"free shipping\")]"
        ],
        "type": "http://schema.org/Coupon",
        "javascript": null,
        "entityIdRef": "",
        "attributes": [
          {
            "repeating": false,
            "locations": {
              "-1": [
                {
                  "xpath": "."
                }
              ]
            },
            "name": "http://schema.org/description",
            "relative": true,
            "transient": false,
            "javascript": "function transform(data) {\n return data.replace(/^\\+/, \"\").trim() || \"\";\n}",
            "dataTypes": [
              "Text"
            ],
            "mandatory": false
          },
          {
            "repeating": false,
            "locations": {
              "-1": [
                {
                  "xpath": "/descendant::span[contains(text(),\"valid through\") or contains(text(),\"Valid through\")]\n|\n/descendant::p[contains(text(),\"valid through\") or contains(text(),\"Valid through\")]"
                }
              ]
            },
            "name": "http://schema.org/validThrough",
            "relative": true,
            "transient": false,
            "javascript": "function transform(data) {\n\tdata = data.match(/valid\\sthrough[\\w\\s:]+p\\.m\\.[\\w\\s,]+\\./gi)[0].split(\",\");\n\tvar result = data[1] + \",\" + data[2];\n\treturn result || \"\";\n}",
            "dataTypes": [
              "DateTime"
            ],
            "mandatory": false
          },
          {
            "repeating": false,
            "locations": {
              "-1": [
                {
                  "xpath": "/descendant::a[contains(.,\"%\") and contains(.,\"free shipping\")]/@href"
                }
              ]
            },
            "name": "http://schema.org/url",
            "relative": true,
            "transient": false,
            "javascript": null,
            "dataTypes": [
              "URL"
            ],
            "mandatory": false
          }
        ]
      },
      {
        "id": "51009acc-e604-4bb0-83c1-ba5ec5e44e33",
        "repeating": true,
        "locations": [
          "/descendant::a[contains(.,\"%\") and not (contains(.,\"Last day!\")) and contains(.,\"free shipping\")]"
        ],
        "type": "http://schema.org/Organization",
        "javascript": null,
        "entityIdRef": "",
        "attributes": [
          {
            "repeating": false,
            "locations": {
              "-1": [
                {
                  "xpath": "\"LANDS' END\""
                }
              ]
            },
            "name": "http://schema.org/name",
            "relative": true,
            "transient": false,
            "javascript": null,
            "dataTypes": [
              "Text"
            ],
            "mandatory": false
          }
        ]
      }
    ],
    "edgeRules": [
      {
        "from": {
          "entityRule": "d0ebaf19-eb36-448f-92d0-2f1fe2b81936",
          "matchAttr": ""
        },
        "to": {
          "entityRule": "51009acc-e604-4bb0-83c1-ba5ec5e44e33",
          "matchAttr": ""
        },
        "predicate": "http://schema.org/broker",
        "cardinality": "ONE_TO_ONE"
      }
    ],
    "entityNS": null
  },
  "metaData": {
    "useVTDXML": "true",
    "ignoredValidations": null
  }
}
