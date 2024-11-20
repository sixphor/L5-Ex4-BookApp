import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Button, SectionList, Image } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3E206D',
        flex: 1,
        padding: 10,
    },

    listContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#4A2A80',
        marginHorizontal: 10,
        overflow: 'hidden',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 3,
        borderWidth: 1,
        width: '100%',
        backgroundColor: '#6A0DAD',
    },

    headerText: {
        color: '#000000',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
    },

    bookTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        marginLeft: 3,
        flexWrap: 'wrap',
        display: 'flex',
        width: '200',
    },

    bookWriter: {
        color: "#acacac",
        marginLeft: 3,
        fontWeight: 'thin',
        fontStyle: 'italic',
    },

    bookDesc: {
        fontSize: 14,
        width: '200',
        marginLeft: 3,
        color: '#D8BFD8',
    },

    image: {
        width: 100,
        height: 140,
        marginRight: 10,
        borderRadius: 5,
    },

    titleContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFD700',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },

    listHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 5,
    },
});

const datasource = [
    {
        data: [
            {   name: 'Overlord',
                writer: 'Kugane Maruyama',
                description: 'Follow the story of Ainz Ooal Gown, a powerful overlord in a fantasy world.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Overlord_novel.jpg/220px-Overlord_novel.jpg'},

            {   name: 'The Rising of the Shield Hero',
                writer: 'Aneko Yusagi',
                description: 'A reluctant hero defends a kingdom with a legendary shield.' ,
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/The_Rising_of_the_Shield_Hero_light_novel_vol_1.jpg/220px-The_Rising_of_the_Shield_Hero_light_novel_vol_1.jpg'},
        ],
        title: "Fantasy Adventure",
        bgColor: "yellow",
        icon: "dragon",
        iconColour: "#ccac01",
    },
    {
        data: [
            {   name: 'The Devil Is a Part-Timer!',
                writer: 'Satoshi Wagahara',
                description: 'A demon lord works part-time at a fast-food restaurant.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Hataraku_Ma%C5%8D-sama%21_light_novel_vol_1.jpg/220px-Hataraku_Ma%C5%8D-sama%21_light_novel_vol_1.jpg'},

            {   name: 'Konosuba: God’s Blessing on This Wonderful World!',
                writer: 'Natsume Akatsuki',
                description: 'A hilarious adventure with an oddball group in another world.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Kono_Subarashii_Sekai_ni_Shukufuku_o%21_light_novel_volume_1_cover.jpg/220px-Kono_Subarashii_Sekai_ni_Shukufuku_o%21_light_novel_volume_1_cover.jpg'},
        ],
        title: "Comedy & Slice of Life",
        bgColor: "skyblue",
        icon: "laugh-beam",
        iconColour: "#1E90FF",
    },
    {
        data: [
            {   name: 'Sword Art Online',
                writer: 'Reki Kawahara',
                description: 'Players trapped in a VR game must fight to survive.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Sword_Art_Online_light_novel_volume_1_cover.jpg/220px-Sword_Art_Online_light_novel_volume_1_cover.jpg' },

            {   name: 'Re:Zero - Starting Life in Another World',
                writer: 'Tappei Nagatsuki',
                description: 'A boy relives his death to save those he loves in a parallel world.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_volume_1_cover.jpg/220px-Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_volume_1_cover.jpg'},
        ],
        title: "Isekai (Other World)",
        bgColor: "orange",
        icon: "globe",
        iconColour: "#FF4500",
    },
    {
        data: [
            {   name: 'No Game No Life',
                writer: 'Yuu Kamiya',
                description: 'Siblings aim to become rulers in a world where games decide everything.',
                image: 'https://m.media-amazon.com/images/M/MV5BOTk5ZDZhNGUtMDM2OS00Y2RkLWEwMmQtODg4ZTZiMGY1ZjFjXkEyXkFqcGc@._V1_.jpg'},

            {   name: 'The Irregular at Magic High School',
                writer: 'Tsutomu Satō',
                description: 'A student excels in magical engineering but hides his true power.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Irregular_at_Magic_High_School_LN_1.png/220px-Irregular_at_Magic_High_School_LN_1.png'},
        ],
        title: "Sci-Fi & Magic",
        bgColor: "#b241d1",
        icon: "rocket",
        iconColour: "#8A2BE2",
    },
    {
        data: [
            {   name: 'Another',
                writer: 'Yukito Ayatsuji',
                description: 'A haunting tale of a cursed classroom and eerie deaths.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Another_%28novel%29_Cover.JPG/220px-Another_%28novel%29_Cover.JPG'},

            {   name: 'Hyouka',
                writer: 'Honobu Yonezawa',
                description: 'A high schooler unravels mysteries with his friends.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Hy%C5%8Dka_novel_cover.jpg/220px-Hy%C5%8Dka_novel_cover.jpg'},
        ],
        title: "Mystery & Supernatural",
        bgColor: "lightblue",
        icon: "user-secret",
        iconColour: "#4682B4",
    },
    {
        data: [
            {   name: 'Toradora!',
                writer: 'Yuyuko Takemiya',
                description: 'A love story full of misunderstandings and comedic moments.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Toradora%21_light_novel_volume_1_cover.jpg/220px-Toradora%21_light_novel_volume_1_cover.jpg'},

            {   name: 'Your Lie in April',
                writer: 'Naoshi Arakawa',
                description: 'A young pianist finds inspiration through a violinist.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Your_Lie_in_April_Manga_cover.png/220px-Your_Lie_in_April_Manga_cover.png'},
        ],
        title: "Romance & Drama",
        bgColor: "pink",
        icon: "heart",
        iconColour: "#FF69B4",
    },
    {
        data: [
            {   name: 'Attack on Titan: Before the Fall',
                writer: 'Ryō Suzukaze',
                description: 'Explore the origins of humanity’s fight against Titans.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Attack_on_Titan_Before_the_Fall%2C_volume_1.jpg/220px-Attack_on_Titan_Before_the_Fall%2C_volume_1.jpg'},

            {   name: 'Grimgar: Ashes and Illusions',
                writer: 'Ao Jūmonji',
                description: 'A group must survive in a mysterious, game-like world.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Grimgar_of_Fantasy_and_Ash%2C_volume_1.jpg/220px-Grimgar_of_Fantasy_and_Ash%2C_volume_1.jpg'},
        ],
        title: "Post-Apocalyptic",
        bgColor: "darkred",
        icon: "biohazard",
        iconColour: "#b80101",
    },
    {
        data: [
            {   name: 'Corpse Party: Blood Covered',
                writer: 'Makoto Kedouin',
                description: 'A chilling tale of students trapped in a haunted school.',
                image: 'https://static.wikia.nocookie.net/corpseparty/images/9/99/CPBC.jpg/revision/latest/scale-to-width-down/255?cb=20170106223943'},

            {   name: 'Shiki',
                writer: 'Fuyumi Ono',
                description: 'A village faces mysterious deaths and a dark supernatural presence.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Shiki_vol1.jpg/220px-Shiki_vol1.jpg'},
        ],
        title: "Horror",
        bgColor: "#282828",
        icon: "skull",
        iconColour: "#B22222",
    },
    {
        data: [
            {   name: 'Spice and Wolf',
                writer: 'Isuna Hasekura',
                description: 'A merchant teams up with a wise wolf deity to travel and trade.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Ookamitokoshinryo01.jpg/220px-Ookamitokoshinryo01.jpg'},

            {   name: 'The Twelve Kingdoms',
                writer: 'Fuyumi Ono',
                description: 'A student is transported to a world of kingdoms and political intrigue.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/The_Twelve_Kingdoms.jpg/220px-The_Twelve_Kingdoms.jpg'},
        ],
        title: "Historical Fantasy",
        bgColor: "tan",
        icon: "scroll",
        iconColour: "#ffddac",
    },
    {
        data: [
            {   name: 'Berserk',
                writer: 'Kentaro Miura',
                description: 'A dark, gritty tale of revenge and survival in a medieval world.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Berserk_vol01.png/220px-Berserk_vol01.png'},

            {   name: 'Black Bullet',
                writer: 'Shiden Kanzaki',
                description: 'Humans and cursed children fight for survival in a post-apocalyptic city.',
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Black_Bullet_light_novel_vol_1.jpg/220px-Black_Bullet_light_novel_vol_1.jpg'},
        ],
        title: "Action",
        bgColor: "#708090",
        icon: "fist-raised",
        iconColour: "#A9A9A9",
    },
];


const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.listContainer}>
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
            <View>
                <Text style={styles.bookTitle}>{item.name}</Text>
                <Text style={styles.bookWriter}>By: {item.writer}</Text>
                <Text style={[styles.bookDesc]}>{item.description}</Text>
                <Text></Text>
                <Text>⭐⭐⭐⭐⭐</Text>
            </View>
        </TouchableOpacity>
    );
};


const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.titleContainer}>
                <Text style={styles.listHeader}>Ultimate Book List</Text>
                <Button title={"ADD BOOK"} />
            </View>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon, iconColour } }) => (
                    <View style={[styles.header, { backgroundColor: bgColor }]}>
                        <FontAwesome5 name={icon} size={20} color={iconColour} />
                        <Text style={[styles.headerText]}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default App;
