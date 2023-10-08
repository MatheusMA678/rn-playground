import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, CameraType } from 'expo-camera'
import { useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'

export default function App() {
  const [type, setType] = useState(CameraType.front)
  const [pictureURI, setPictureURI] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [permission, requestPermission] = Camera.useCameraPermissions()

  const camRef = useRef<Camera>(null)

  if (!permission?.granted) {
    requestPermission()
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const takePicture = async () => {
    if (camRef.current) {
      const pic = await camRef.current.takePictureAsync()
      setPictureURI(pic.uri)
      setOpen(true)
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full border-b border-zinc-800 h-16 flex-row items-center px-4">
        <Text className="text-2xl font-bold">Camera</Text>
      </View>
      <Camera
        ref={camRef}
        className="flex-1"
        type={type}
        ratio="16:9"
        useCamera2Api
      >
        <View className="flex-1 items-center justify-end p-8">
          <Pressable className="w-20 h-20 bg-white rounded-full items-center justify-center" onPress={takePicture}>
            <FontAwesome name="camera" size={20} />
            {/* <Text className="font-medium">ASD</Text> */}
          </Pressable>
        </View>
      </Camera>

      {pictureURI && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={open}
        >
          <View className="flex-1 items-center justify-around p-4">
            <Image
              className="aspect-[9/16] rounded-lg"
              source={{ uri: pictureURI }}
              width={350}
            />

            <Pressable className="bg-zinc-900 px-6 py-2 rounded" onPress={() => setOpen(false)}>
              <Text className="text-zinc-100 text-xl font-medium">Voltar</Text>
            </Pressable>
          </View>
        </Modal>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
