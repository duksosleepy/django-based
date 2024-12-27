selectableModelIsActive(Model) {
  return this.selectableModelActive && this.selectableModelActive == Model;
},
selectableModelActiveNext() {
  let index = this.selectableModels.indexOf(this.selectableModelActive);
  if (index < this.selectableModels.length - 1) {
      this.selectableModelActive = this.selectableModels[index + 1];
      this.selectScrollToActiveModel();
  }
}, selectableModelActivePrevious() {
  let
      index = this.selectableModels.indexOf(this.selectableModelActive);
  if (index > 0) {
      this.selectableModelActive = this.selectableModels[index - 1];
      this.selectScrollToActiveModel();
  }
},
selectScrollToActiveModel() {
  if (this.selectableModelActive) {
      activeElement = document.getElementById(this.selectableModelActive + '-' + this.selectId)
      newScrollPos = (activeElement.offsetTop + activeElement.offsetHeight) -
          this.$refs.selectableModelsList.offsetHeight;
      if (newScrollPos > 0) {
          this.$refs.selectableModelsList.scrollTop = newScrollPos;
      } else {
          this.$refs.selectableModelsList.scrollTop = 0;
      }
  }
},
selectKeydown2(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
      this.selectKeydownValue2 += event.key;
      selectedModelBestMatch = this.selectModelsFindBestMatch();
      if (selectedModelBestMatch) {
          if (this.selectOpen) {
              this.selectableModelActive = selectedModelBestMatch;
              this.selectScrollToActiveModel();
          } else {
              this.selectedModel = this.selectableModelActive = selectedModelBestMatch;
          }
      }
      if (this.selectKeydownValue2 != '') {
          clearTimeout(this.selectKeydownClearTimeout2);
          this.selectKeydownClearTimeout2 = setTimeout(() => {
              this.selectKeydownValue2 = '';
          }, this.selectKeydownTimeout2);
      }
  }
},
selectModelsFindBestMatch() {
  typedValue = this.selectKeydownValue2.toLowerCase();
  var bestMatch = null;
  var bestMatchIndex = -1;
  for (var i = 0; i < this.selectableModels.length; i++) {
      var title = this.selectableModels[i].toLowerCase();
      var index = title.indexOf(typedValue);
      if (index > -1 && (bestMatchIndex == -1 || index < bestMatchIndex) &&
          !this.selectableModels[i].disabled) {
          bestMatch = this.selectableModels[i];
          bestMatchIndex = index;
      }
  }
  return bestMatch;
}, selectPositionUpdate2() {
  selectDropdownBottomPos = this.$refs.selectButton2.getBoundingClientRect().top +
      this.$refs.selectButton2.offsetHeight +
      parseInt(window.getComputedStyle(this.$refs.selectableModelsList).maxHeight);
  if (window.innerHeight <
      selectDropdownBottomPos) {
      this.selectDropdown2Position = 'top';
  } else {
      this.selectDropdown2Position = 'bottom';
  }
}


$watch('selectOpen2', function(){
  if(!selectedModel){
      selectableModelActive=selectableModels[0];
  } else {
      selectableModelActive=selectedModel;
  }
  setTimeout(function(){
    selectScrollToActiveModel();
  }, 10);
  selectPositionUpdate2();
  window.addEventListener('resize', (event) => { selectPositionUpdate2(); });
});
