import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import StarRating from 'react-native-star-rating';

const card = (props) => (
    <Card style={{ backgroundColor: '#E53935' }}>
        <CardItem cardBody>
            <Image source={{ uri: props.item.imageUrl }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem style={{ backgroundColor: '#E53935' }}>
            <Left>
                <Body>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>{props.item.title}</Text>
                    <StarRating
                        starSize={20}
                        containerStyle={{width:26}}
                        disabled={true}
                        maxStars={5}
                        rating={3.25}
                        halfStarEnabled={true}
                        //selectedStar={(rating) => this.onStarRatingPress(rating)}
                        fullStarColor={'#ffcc00'}
                    />
                    <Text note style={{ color: '#fff' }}>Serves:</Text>
                    <Text note style={{ color: '#fff' }}>Recipe:</Text>
                </Body>
            </Left>
            <Right>
                <Body>
                    <Text style={{ color: '#fff' }}>{props.item.price} PKR</Text>
                    <CardItem style={{ backgroundColor: '#E53935' }}>
                        <Icon active name="md-card" style={styles.icon} />
                        <Icon active name="md-restaurant" style={styles.icon} />
                        <Icon active name="md-bus" style={{ color: '#fff' }} />
                    </CardItem>
                    <CardItem style={{ marginTop: -15, backgroundColor: '#E53935' }}>
                        <Text note style={{ fontSize: 12, color: '#fff' }}>Cards | </Text>
                        <Text note style={{ fontSize: 12, color: '#fff' }}>DineIn | </Text>
                        <Text note style={{ fontSize: 12, color: '#fff' }}>Delivery</Text>
                    </CardItem>

                </Body>
            </Right>
        </CardItem>
        <CardItem style={{ backgroundColor: '#E53935' }}>
            <Left>

                <Button rounded style={styles.reactionButton}>
                    <Icon active name="heart" style={styles.reactionIcon} />
                    <Text>12</Text>
                </Button>
                <Button rounded style={styles.reactionButton}>
                    <Icon active name="star" style={styles.reactionIcon} />
                    <Text>5</Text>
                </Button>
                <Button rounded style={styles.reactionButton}>
                    <Icon active name="reorder" style={styles.reactionIcon} />
                    <Text>5</Text>
                </Button>
            </Left>

            <Right>
                <Body>
                    <Button rounded style={{ backgroundColor: '#FFB300' }}>
                        <Icon active name="md-cart" />
                    </Button>
                </Body>
            </Right>
        </CardItem>
    </Card>
)

const styles = StyleSheet.create({
    icon: {
        marginRight: 12,
        color: '#fff'
    },
    reactionIcon: {
        marginRight: -10
    },
    reactionButton: {
        width: 63,
        margin: 1,
        backgroundColor: '#FFB300'
    }
});

export default card;