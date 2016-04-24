app.controller('MainController', ['$scope', function($scope) {
  $scope.clips = [
  { name: 'Props Bell', {
    src: 'https://photos-6.dropbox.com/t/2/AABkwYuvYIYK8o2kdWkdOJBVQUTTPpKG0s9DvQOWkXZjTw/12/203727679/jpeg/32x32/1/_/1/2/tUP%20Props.gif/EKW5x6MEGJIBIAIoAg/o3X6BzFKRq-DM3ASbXOfBDSL1rxFuClwF5xAdUkJoFE?size_mode=5',
    audio: 'https://www.dropbox.com/s/vvegp41wybvk3z6/PropsBell.wav?dl=0'
   },},
  { name: 'Filling My Pants', {
    icon: 'https://photos-3.dropbox.com/t/2/AAAddaVuCRuWOlSPhDfhkUeTAQb_0YPqgy6AZl8q15tW-g/12/203727679/jpeg/32x32/1/_/1/2/tUP%20FMP%20II.jpg/EKW5x6MEGI4BIAIoAg/buuK_F4VAngPepkpMIrrp8w43canR7Hx7shSf6LrWng?size=800x600&size_mode=3',
    audio: 'https://www.dropbox.com/s/6s9tv0vwhui8m1r/FillingMyPants.wav?dl=0'
   },}, 
  { name: 'Mortal K-conflict', {
    icon: 'https://photos-4.dropbox.com/t/2/AAAqLgcp8Vm2_HnLLbHCaC_BRUiakU_PjVngyjwMba02-Q/12/203727679/jpeg/32x32/1/_/1/2/tUP%20Mortal%20KC.jpg/EKW5x6MEGI4BIAIoAg/SllRC2_J__8Mfl0WnaPtHy4oQ10dzTD7L3B_ETxd3q4?size=800x600&size_mode=3',
    audio: 'https://www.dropbox.com/s/47ycutxmge6env4/MortalConflict.wav?dl=0'
   },},
  { name: 'Pick Up Your Brain', {
    icon: 'https://photos-6.dropbox.com/t/2/AACxik6JZAH85Qbn-vruHUpdirbyl_nk5PSS38tEuDmbcg/12/203727679/jpeg/32x32/1/_/1/2/tUP%20PUY%20Brain.jpg/EKW5x6MEGI4BIAIoAg/ut5kZy9ByQFO47VMrJls6eseVSq9QR7MsvVpo2TfaU4?size=800x600&size_mode=3',
    audio: 'https://www.dropbox.com/s/6p7ph6ifdzl1lb5/PickUpYourBrain%20-%20Jude.wav?dl=0'
   },}, 
  { name: 'Pick Up Your Mouth', {
    icon: 'https://photos-5.dropbox.com/t/2/AADsHck-CV7SWVuBitBeaHTEnhbq3aAcjDTLdSaLYgss-A/12/203727679/jpeg/32x32/1/_/1/2/tUP%20PUY%20Mouth.jpg/EKW5x6MEGI4BIAIoAg/6GP-j2ZMzB3CKVYKQQaKaAHtGbfBLCtXlPtamoN7CJc?size=800x600&size_mode=3',
    audio: 'https://www.dropbox.com/s/qp4qhumbsqza8kb/PickUpYourMouth%20-%20Jude.wav?dl=0'
   },},
  { name: 'Crispy Critter\'d My Left Foot', {
    icon: 'https://photos-3.dropbox.com/t/2/AADPZcW-qbDCbKNmxVBQmFFm5d9nMTQcRHpYbcqRDAVN1Q/12/203727679/jpeg/32x32/1/_/1/2/tUP%20Blue%20Beam.jpg/EKW5x6MEGI4BIAIoAg/hCmD_dCXS08Fq012qTSIhyfdxbCeHQXRUHq6Fzama7Y?size=800x600&size_mode=3',
    audio: 'https://www.dropbox.com/s/4ukeofbiqpvcv3p/CrispyCrittered.wav?dl=0'
   },}, 
  { name: 'Now - Something\'s Wrong Here', {
    icon: 'https://photos-2.dropbox.com/t/2/AADcXWUA5po-T0Wo4l3hLXbPohkbVYaawYMhk34J3UBGjA/12/203727679/jpeg/32x32/1/_/1/2/tUP%20Something%20Wrong%20Here.jpg/EKW5x6MEGI4BIAIoAg/JXRboCfS3GBw-C_ab9I2HHKNfmRbedzCJuZ0uyhxgv8?size=800x600&size_mode=3',
    audio: 'https://www.dropbox.com/s/nenuw59yxo2r5nt/NowSomethingsWrongHere.wav?dl=0'
   },},
  { name: 'We Don\'t Know', {
    icon: 'https://photos-3.dropbox.com/t/2/AAAfCkcYt340npJgubBJClh35BB37QcjFC6_2mXHVlOk7A/12/203727679/jpeg/32x32/1/_/1/2/tUP%20WeDontKnow.JPG/EKW5x6MEGI4BIAIoAg/AXR_OhtXN_0xazkSxwTxg8OufNXAVWVHFUgHDmBm8zU?size=800x600&size_mode=3',
    audio: 'https://www.dropbox.com/s/om8iz35dvt8rb5v/WeDontKnow.wav?dl=0'
   },}, 
  { name: 'Peacefully Getting A Hamburger', {
    icon: 'https://photos-4.dropbox.com/t/2/AABJFHOa5KjzN2A2woZlx3UHbqC0rhGyIjbvflfisnfBwA/12/203727679/jpeg/32x32/1/_/1/2/tUP%20Hamburger.jpg/EKW5x6MEGJIBIAIoAg/PshJ1t0BJSNP91liJQ8lfoodcsCwf1TswNq8wH7XFL4?size_mode=5',
    audio: 'https://www.dropbox.com/s/hfzzgg3urv3x9xw/PeacefullyGettingAHamburger.wav?dl=0'
   },},
 
  ]

}]);
