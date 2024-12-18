import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei' //Importing gltf - Loader for 3d models
import { useCustomization } from '../contexts/Customization'

const Car1 = (props) => {
  const { nodes, materials } = useGLTF('./models/car1/car1.gltf')
  const { accessory, carColour } = useCustomization(); //Defining the things we have to customize 
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.01, 0]} rotation={[3.13, 0, Math.PI]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Main_Paint} material-color={carColour.name}/>
        <mesh geometry={nodes.Object_5.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Tail_Lights} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Globes} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Mirrors} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Gold} />
      </group>
      <group position={[0, 0.05, -0.08]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.61, 0.65, 0.65]}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.Chrome}/>
        <mesh geometry={nodes.Object_16.geometry} material={materials.Gold} visible={accessory === 1}/>
      </group>
      <mesh geometry={nodes.Object_18.geometry} material={materials.Rims} position={[0, 0.05, 0.02]} scale={[0.61, 0.65, 0.65]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.Tyres} position={[0, 0.05, 0.02]} scale={[0.61, 0.65, 0.65]} />
    </group>
  )
} //Defining each components of the car for changing colors , adding accessories

useGLTF.preload('./models/car1/car1.gltf')

export default Car1;