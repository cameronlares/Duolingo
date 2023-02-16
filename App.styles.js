import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop:30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch'
  },

  optionsContainer: {
    width:'100%',
    flexDirection:'row',
    flex:1,
    flexWrap:"wrap",
    justifyContent:"space-between",
    alignContent: "space-between"

  },
})

export default styles
