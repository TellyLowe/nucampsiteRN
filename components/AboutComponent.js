import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import Card from 'react-navigation/src/views/StackView/StackViewCard';
import { PARTNERS } from '../shared/partners';
import { ListItem } from 'react-native-elements';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        const renderPartner = ({item}) => {
            return(
                <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            )
        }
        return(
            <ScrollView>
                <RenderItem><Mission/></RenderItem>
                <RenderItem>
                    <Card title={"Community Partners"}>
                    <FlatList
                    data={this.state.campsites}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                    />    
                    </Card>
                </RenderItem>
            </ScrollView>
        );
    }
    
}

function Mission() {
    return (
        <Card>
            <Text>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We</Text>
            <Text>increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness tre</Text>
            <Text>kkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform</Text>
            <Text>for campers to share reviews on campsites they have visited with each other.</Text>
        </Card>
    );
}

export default About;