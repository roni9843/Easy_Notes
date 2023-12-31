import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect } from "react";
import AddNotes from "../Screens/AddNotes";
import NotesScreen from "../Screens/NotesScreen";
import { languageContext } from "./BottomTabs";

const Stack = createStackNavigator();

// user info create context
export const UserInfoContext = React.createContext(undefined, undefined);

const BottomNotesComponents = ({ navigation, route }) => {
  const [contextCard, setContextCard] = React.useState({
    newUserValue: "",
  });

  const [language, setLanguage] = useContext(languageContext);

  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  }, [navigation, route]);

  return (
    <UserInfoContext.Provider value={[contextCard, setContextCard]}>
      <Stack.Navigator>
        <Stack.Screen
          initialParams={[
            {
              random: Math.floor(10 + Math.random() * 90),
              update: true,
            },
          ]}
          options={{
            title: ` ${language === "english" ? "Notes" : "নোট"} `,

            headerTintColor: "#F79E89",
            // headerStyle: {
            //   backgroundColor: "#F76C6A",
            // },
          }}
          name={"Notes Screen"}
          component={NotesScreen}
        />
        <Stack.Screen
          options={{
            //  presentation: "modal",
            headerShown: false,
          }}
          name={"Add Note"}
          component={AddNotes}
        />
      </Stack.Navigator>
    </UserInfoContext.Provider>
  );
};

export default BottomNotesComponents;
