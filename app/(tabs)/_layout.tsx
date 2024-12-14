import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const tabBarIconSize = 18;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        tabBarLabelStyle: { fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="filetext1" size={tabBarIconSize} color={color} />
          ),
          tabBarLabel: 'Lists',
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                    name="infocirlce"
                    size={25}
                    color={Colors.light.text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color }) => (
            <AntDesign name="folderopen" size={tabBarIconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={tabBarIconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="archives"
        options={{
          title: 'Archived',
          tabBarIcon: ({ color }) => (
            <AntDesign name="delete" size={tabBarIconSize} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
