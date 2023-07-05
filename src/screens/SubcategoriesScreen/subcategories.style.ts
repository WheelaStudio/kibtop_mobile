import { colors } from '@/constants/colors';
import { appFont } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
  },
  searchBlock:{
    height:45
  },
  dialogs:{
    flex:1,
    paddingVertical:20
  },
  dialog:{
    alignItems:'center',
    height:68,
    paddingHorizontal:13,
    paddingVertical:7,
    flexDirection:'row',
    borderBottomColor:"#EDEDED",
    borderBottomWidth:1
  },
   profilePhoto:{
    width:60,
    height:60,
    borderRadius:60,
    overflow:"hidden"
  },
  dialogTexts:{
    flex:1,
    paddingHorizontal:9

  },
  dialogStatus:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  userName:{
    fontSize:16,
    fontFamily:appFont.Semibold,
    color:colors.dark 
  },
  messageDate:{
    fontSize:13,
    fontFamily:appFont.Regular,
    color:colors.dark ,
    opacity:40
  },
  lastMessage:{
    fontSize:13,
    fontFamily:appFont.Regular,
    color:colors.dark ,
    opacity:60,
   
  }
});