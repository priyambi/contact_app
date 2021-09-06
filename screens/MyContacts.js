import React, {useState,useEffect} from 'react';
import {Text,
       View,
       StyleSheet,
       FlatList,
       TouchableOpacity,
       PermissionsAndroid,
       } 
       from 'react-native';
//import Ionicons from 'react-native-vector-icons/Ionicons'
import Contacts from 'react-native-contacts'
import { useIsFocused } from '@react-navigation/native';

import ContactCard from '../components/ContactCard';

export default function MyContacts({navigation}){


    const isFocused=useIsFocused();
    const[myContacts, setMyContacts]=useState([]);
    useEffect(()=>{
        getAllContacts();
        //console.log(myContacts);
    },[isFocused])
    
    async function getAllContacts(){
        try{
            const permission=await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS
            );
            if(permission==='granted'){
                const contacts=await Contacts.getAll();
                //console.log(contacts);
                
                setMyContacts(contacts);
            }
        }catch(error){
                console.log(error);
            }
        }
    // Contacts.getAll((err,contacts)=>{
    //     contacts.sort(
    //         (a,b)=>a.givenName.toLowerCase()>b.givenName.toLowerCase());
    //         console.log('contacts->',contacts);
    //         if(err=="denied"){
    //             alert("Permission denied");
    //             console.warn("Permission denied");
    //         }else{
    //             setMyContacts(contacts);
    //             console.log('contacts',contacts);
    //         }
            

        
    // });
    // const [myContacts, setMyContacts ] = useState([])
    // useEffect(() => {
    //   (async () => {
    //     const { status } = await PermissionsAndroid.request(
    //                   PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    //             );
    //     if (status === 'granted') {
    //       const { data } = await Contacts.getAll({
    //         fields: [Contacts.name.phoneNumbers],
    //       });
  
    //       if (data.length > 0) {
    //         setMyContacts(data)
    //       }
    //     }
    //   })();
    // }, []);
  return(
    <View style={styles.main}>
      {/* <Ionicons
          name='add-circle'
          size={50}
          color='lightblue'
          style={styles.addIcon}
          onPress={()=>navigation.navigate('CreateContact')}/> */}
          <FlatList 
          data={myContacts}
          keyExtractor={(item)=>item.recordID} 
          renderItem={({item})=>{return(
            <TouchableOpacity onPress={()=>navigation.navigate('Profile',{contactInfo:{id:item.recordID}})}>
                <ContactCard contactInfo={item}/>
               </TouchableOpacity>
          )}}
          />
          {/* <FlatList>
              data={myContacts}
              keyExtractor={(item)=>item.recordID} 
              renderitem={({item,index})=>
              { console.log(index)
              //   return(<TouchableOpacity onPress={()=>navigation.navigate('Profile',{contactInfo:{id:item.recordID}})}>
              //   <ContactCard contactInfo={item}/>
              //  </TouchableOpacity>)
              return(
                <Text>Hi</Text>
              )
              }
                                }
          </FlatList> */}
            {/* renderItem={({item}) => {
          return (
            //console.log(item.name[0]),
            <Text>{`${item.name} (${item.phoneNumbers ? item.phoneNumbers[0].number : ''})`}</Text>
          )
        }}
         </FlatList> */}
      

    </View>
  )
}
const styles=StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
      },
      main:{
        backgroundColor:"#45EBA5"
      }
      // addIcon: {
      //   top: 500,
      //   right: 20,
      //   position: 'absolute',
      //   zIndex: 1,
      // }
})