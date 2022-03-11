/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import SearchList from './src/components/searchlist';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import filter from 'lodash.filter';
import _ from 'lodash';
import { FloatingAction } from "react-native-floating-action";
import uuid from 'react-native-uuid';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [showAdd, setShowAdd] = useState(false);
  const [showError, setShowError] = useState(false);
  const [erroMessage, setErroMessage] = useState('');
  const [categoryNameEN, setCategoryNameEN] = useState('');
  const [categoryNameHI, setCategoryNameHI] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [featured, setFeatured] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20
  };

  const actions = [
    {
      text: "Add Item",
      Icon: require("./resources/icon.svg"),
      name: "bt_addItem",
      position: 1
    },
  ];

  const [mainData, setMainData] = useState([
        {
          categoryId: "9277259b-3d89-4bdb-8a00-35e12a34ef22",
          name: [
              {
                  "_id": "7e2f3481-5a49-49e8-8499-8b0996b3886e",
                  "language": "en",
                  "value": "Others"
              },
              {
                  "_id": "1f51cf08-b0f9-4869-8ac6-10689139a68f",
                  "language": "hi",
                  "value": "अन्य"
              }
          ],
          slug: "others-07",
          description: "Find a job vacancies around you ",
          parentID: "0",
          typ: 1,
          attributeSet: "646fd6f0-7e99-4e58-b139-6f82513fb066",
          categoryNumber: 1112,
          level: 1,
          featured: false,
          icon: "category-icons/1630154235395-ico.png",
          image: [],
          status: true,
          create_date: "2021-08-28T12:37:15.443Z"
      },
      {
        categoryId: "6753f866-8eca-4921-b78a-334120a2ce7c",
        name: [
            {
                "_id": "12468b00-75c4-472d-ac28-be61e5739dea",
                "language": "en",
                "value": "Maintenance Worker"
            },
            {
                "_id": "db401269-0422-4ace-8d1a-c73419d1b580",
                "language": "hi",
                "value": "रखरखाव कर्मी"
            }
        ],
        slug: "others-07",
        description: "Find technical job vacancies around you ",
        parentID: "9277259b-3d89-4bdb-8a00-35e12a34ef22",
        type: 1,
        attributeSet: "27c9d7c5-334d-4933-bc0b-d21a057e8503",
        categoryNumber: 1112,
        level: 1,
        featured: false,
        icon: "category-icons/1630154235395-ico.png",
        image: [],
        status: true,
        create_date: "2021-08-28T12:37:15.443Z"
    },
    {
      categoryId: "d080060b-982b-4385-9e15-93e61b84c62e",
      name: [
          {
              "_id": "11a7932e-7906-42f5-9466-b9a49589657d",
              "language": "en",
              "value": "Electrician"
          },
          {
              "_id": "330e6025-4c14-47d6-baa4-66a01488c08d",
              "language": "hi",
              "value": "बिजली मिस्त्री"
          }
      ],
      slug: "others-07",
      description: "Find electritian job vacancies around you ",
      parentID: "6753f866-8eca-4921-b78a-334120a2ce7c",
      type: 1,
      attributeSet: "9111bf2b-c347-463a-aad5-a87ab9656572",
      categoryNumber: 1112,
      level: 1,
      featured: false,
      icon: "category-icons/1630154235395-ico.png",
      image: [],
      status: true,
      create_date: "2021-08-28T12:37:15.443Z"
    },
    {
      categoryId: "0bee270a-0a8a-4d38-aae4-e856ec18ba3f",
      name: [
          {
              "_id": "0b237122-27de-44b7-8648-1cdaf2e6b1e9",
              "language": "en",
              "value": "Plumber"
          },
          {
              "_id": "4078076c-f460-4d84-8480-ccc9f1c73ec0",
              "language": "hi",
              "value": "नलसाज"
          }
      ],
      slug: "others-07",
      description: "Find electritian job vacancies around you ",
      parentID: "6753f866-8eca-4921-b78a-334120a2ce7c",
      type: 1,
      attributeSet: "2e75f342-a57d-41ea-8e0c-387daa011ebb",
      categoryNumber: 1112,
      level: 1,
      featured: false,
      icon: "category-icons/1630154235395-ico.png",
      image: [],
      status: true,
      create_date: "2021-08-28T12:37:15.443Z"
    },
    {
      categoryId: "48e274a5-ecc9-4623-8f87-1f458905726e",
      name: [
          {
              "_id": "1a75ac4f-d5fd-4bbd-9a11-88fc4f727c7a",
              "language": "en",
              "value": "Software"
          },
          {
              "_id": "ffeeb840-5373-4933-b5b4-06148a28066a",
              "language": "hi",
              "value": "सॉफ्टवेर"
          }
      ],
      slug: "others-07",
      description: "Find electritian job vacancies around you ",
      parentID: "9277259b-3d89-4bdb-8a00-35e12a34ef22",
      type: 1,
      attributeSet: "cf82d598-5866-4bcc-affd-f6c7833d53be",
      categoryNumber: 1112,
      level: 1,
      featured: false,
      icon: "category-icons/1630154235395-ico.png",
      image: [],
      status: true,
      create_date: "2021-08-28T12:37:15.443Z"
    },
    {
      categoryId: "2ebe9f33-23d5-40f1-962e-930d4d9d9f7f",
      name: [
          {
              "_id": "cd906d77-222c-4d50-9952-6226db351f06",
              "language": "en",
              "value": "Software Engineer"
          },
          {
              "_id": "d6934482-a305-4a11-ad16-b79ae21a0d58",
              "language": "hi",
              "value": "सॉफ्टवेयर इंजीनियरिंग"
          }
      ],
      slug: "others-07",
      description: "Find electritian job vacancies around you ",
      parentID: "48e274a5-ecc9-4623-8f87-1f458905726e",
      type: 1,
      attributeSet: "5a8053ca-1d73-4ac6-9f1a-a23e171c69d5",
      categoryNumber: 1112,
      level: 1,
      featured: false,
      icon: "category-icons/1630154235395-ico.png",
      image: [],
      status: true,
      create_date: "2021-08-28T12:37:15.443Z"
    }
  ]);
  
  const nest = (items, categoryId = '0', link = 'parentID') =>
  items
    .filter(item => item[link] == categoryId)
    .map(item => ({ ...item, children: nest(items, item.categoryId) }));

  const treeData = nest(mainData);

  const [data, setData] = useState(treeData);
  const [query, setQuery] = useState(treeData);

  const listEmptyView = ({text = 'No Items'}) => {
    return (
      <View style={styles.emptyWrapper}>
        <Text style={styles.emptyText}>{text}</Text>
      </View>
    );
  };

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(mainData, category => {
      return contains(category, formattedQuery);
    });
    if(text == ""){
      setData(nest(mainData));
    }else{
      setData(filteredData);
    }
    
    setQuery(text);
  };

  const contains = ({name}, query) => {
    if (name[0].value.toLowerCase().includes(query)) {
      return true;
    }

    return false;
  };

  const addItem = () => {
    if(categoryNameEN != "" && categoryNameHI != "" && description != "" && image != ""){
      let newData = [...mainData, {
          categoryId: uuid.v4(),
          name: [
              {
                  "_id": uuid.v4(),
                  "language": "en",
                  "value": categoryNameEN
              },
              {
                  "_id": uuid.v4(),
                  "language": "hi",
                  "value": categoryNameHI
              }
          ],
          slug: "others-07",
          description: description,
          parentID: "0",
          typ: 1,
          attributeSet: uuid.v4(),
          categoryNumber: 1112,
          level: 1,
          featured: featured,
          icon: "category-icons/1630154235395-ico.png",
          image: [image],
          status: true,
          create_date: "2021-08-28T12:37:15.443Z"
      }];
      setMainData(newData);
      setData(nest(newData));
      setShowAdd(false);
    }else if(categoryNameEN == "" && categoryNameHI == "" && description == "" && image == ""){
      setErroMessage("Please enter all fields");
      setShowError(true);
      setTimeout(()=> setShowError(false), 2000);
    }else if(categoryNameEN == ""){
      setErroMessage("Please enter category name in english");
      setShowError(true);
      setTimeout(()=> setShowError(false), 2000);
    }else if(categoryNameHI == ""){
      setErroMessage("Please enter category name in hindi");
      setShowError(true);
      setTimeout(()=> setShowError(false), 2000);
    }else if(description == ""){
      setErroMessage("Please enter description");
      setShowError(true);
      setTimeout(()=> setShowError(false), 2000);
    }else if(image == ""){
      setErroMessage("Please enter image");
      setShowError(true);
      setTimeout(()=> setShowError(false), 2000);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: '#fff',
          marginVertical: 10,
          padding: 10,
          marginHorizontal: 10,
          borderRadius: 20,
        }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{backgroundColor: '#fff', paddingHorizontal: 20}}
        />
      </View>
      <FloatingAction actions={actions} onPressItem={()=>{setShowAdd(true)}}/>
      <SearchList
        data={data}
        itemStyle={styles.itemStyle}
        style={styles.container}
        renderItem={item => <Text style={{color: 'black', fontSize: 16}}>{item.name[0].value} ({item.name[1].value})</Text>}
        arrowRight={<Icon name="caret-right" color={'black'} size={24} />}
        arrowDown={<Icon name="caret-down" color={'black'} size={24}/>}
        onPressItem={item => console.log(item.name)}
        listEmptyView={listEmptyView}
        handleSearch={handleSearch}
      />
      <Modal animationType="slide"
          transparent={true}
          visible={showAdd}
          onRequestClose={() => {
            setShowAdd(false);
          }}
        >
          <View style={{
            backgroundColor: '#cccccc',
            flex: 1,
            paddingTop: 100
          }}>
            <View
              style={{
                backgroundColor: '#fff',
                marginVertical: 10,
                padding: 10,
                marginHorizontal: 10,
                borderRadius: 20,
              }}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={categoryNameEN}
                onChangeText={categoryNameEN => setCategoryNameEN(categoryNameEN)}
                placeholder="Category name in english"
                style={{backgroundColor: '#fff', paddingHorizontal: 20}}
              />
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                marginVertical: 10,
                padding: 10,
                marginHorizontal: 10,
                borderRadius: 20,
              }}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={categoryNameHI}
                onChangeText={categoryNameHI => setCategoryNameHI(categoryNameHI)}
                placeholder="Category name in hindi"
                style={{backgroundColor: '#fff', paddingHorizontal: 20}}
              />
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                marginVertical: 10,
                padding: 10,
                marginHorizontal: 10,
                borderRadius: 20,
              }}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={description}
                onChangeText={description => setDescription(description)}
                placeholder="Description"
                style={{backgroundColor: '#fff', paddingHorizontal: 20}}
              />
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                marginVertical: 10,
                padding: 10,
                marginHorizontal: 10,
                borderRadius: 20,
              }}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={image}
                onChangeText={image => setImage(image)}
                placeholder="Image"
                style={{backgroundColor: '#fff', paddingHorizontal: 20}}
              />
            </View>
            <View
              style={{
                marginVertical: 10,
                padding: 10,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{
              paddingHorizontal: 20,
            }}>Is featured? </Text>
              <Switch onValueChange={(value)=>setFeatured(value)} value={featured}/>
            </View>
            {showError && <Text style={{
              paddingHorizontal: 20,
              color: 'red'
            }}>{erroMessage}</Text>}
            <Button title='Add Item' onPress={addItem}/>
            <View style={{ height: 40, position:'absolute', top: 50, right: 10}}>
              <Button title='Close' onPress={()=>{
                setShowAdd(false)
              }}/>
            </View>
          </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
