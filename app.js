<TextInput
 style={styles.inputBox}
 onChangeText={text => {
    this.setState({
        text:text
        isSearchPressed: false,
        word  "Loading...",
        lexicalCategory : '',
        examples : [],
        defination : ""
    });
 }}
 value={this.state.text}
 />

 getWord= (text)=>{
    var text = text.toLowerCase()
    try{
        var word= dictionary[text]["word"]
        var lexicalCategory = dictionary[text]["lexicalCategory"]
        var definition = dictionart[text]["definition"]
        this.setState({
            "word" : word,
            "lexicalCategory" : lexicalCategory,
            "definition" : definition	
        })
    }
    catch(err){
        alert("Sorry This word is not available for now")
        this.setState({
            'text': '',
            'isSearchPressed': false
        })
    }
 }