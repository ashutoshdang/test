import { Component, OnInit, Input, AfterViewChecked, AfterViewInit, AfterContentChecked } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from '../../../interface/form.model';
import { FormControlService } from '../../../service/form-control.service';
import { FormFieldsService } from '../../../service/form-fields.service';
import { FormDataSaveService } from '../../../service/form-data-save.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Constants } from '../../../constants';
declare var $: any;

@Component({
  selector: 'app-girl-child-survival',
  templateUrl: './girl-child-survival.component.html',
  styleUrls: ['./girl-child-survival.component.scss']
})
export class GirlChildSurvivalComponent implements OnInit {
  form: FormGroup;
  formFields: any;
  payLoad = '';
  formSubSections:any;
  selectedYear: any;
  selectedQuarter: any;
  sectionName: string = "Inter-sectoral initiatives for equal value of girl child";
  baseUrl = Constants.HOME_URL;
  constructor(private formControlService: FormControlService, private formDataSave: FormDataSaveService, 
    private httpClient: HttpClient, private router: Router, private formFieldService: FormFieldsService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if(this.formDataSave.form){
      this.formSubSections = this.formDataSave.form[this.sectionName];
      this.selectedYear = this.formDataSave.yearName;
      this.selectedQuarter = this.formDataSave.periodreferenceName;
      this.labelHighlightOnFocus();
    }
    else{
      this.router.navigateByUrl('/data-entry-selection');
    }
}
isLessThanDependencyOnPress(index, subsectionKey, subsectionIndex){
  let currentElement = this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index];
    let parentElement = this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0][Object.keys(this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0])[currentElement.parentIndex[1]]][currentElement.parentIndex[2]];
    if(parseInt(currentElement.value) > parseInt(parentElement.value) || ((parentElement.value == undefined || parentElement.value == null) && currentElement.value )){
      // this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].value = this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0][Object.keys(this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0])[currentElement.parentIndex[1]]][currentElement.parentIndex[2]].value;
      this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].isDependencyError = true;
      this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].dependencyErrorMessage = "Should not be greater than total number of girls toilets";
    }
    else{
      this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].isDependencyError = false;
    }
  }
  isGreaterThanDependencyOnPress(index, subsectionKey, subsectionIndex){
    let currentElement = this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index];
    let parentElement = this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0][Object.keys(this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0])[currentElement.parentIndex[1]]][currentElement.parentIndex[2]];
    if(parseInt(currentElement.value) < parseInt(parentElement.value)){
      // this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].value = this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0][Object.keys(this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0])[currentElement.parentIndex[1]]][currentElement.parentIndex[2]].value;
      this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].isDependencyError = true;
      this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].dependencyErrorMessage = "Should not be less than number of functional girls toilets";
    }
    else{
      this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].isDependencyError = false;
    }
  }
  isLessThanEqualToDependency(index, subsectionKey, subsectionIndex){
    
    let currentElement = this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index];
    let parentElement = this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0][Object.keys(this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0])[currentElement.parentIndex[1]]][currentElement.parentIndex[2]];
    if(parseInt(currentElement.value) > parseInt(parentElement.value) || parentElement.value == undefined || parentElement.value == null){
      // this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].value = this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0][Object.keys(this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0])[currentElement.parentIndex[1]]][currentElement.parentIndex[2]].value;
      this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].value = undefined;
    }
    this.isLessThanDependencyOnPress(index, subsectionKey, subsectionIndex);
  }
  isGreaterThanEqualToDependency(index, subsectionKey, subsectionIndex){
    
    let currentElement = this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index];
    let parentElement = this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0][Object.keys(this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0])[currentElement.parentIndex[1]]][currentElement.parentIndex[2]];
    if(parseInt(currentElement.value) < parseInt(parentElement.value) ){
      // this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].value = this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0][Object.keys(this.formDataSave.form[Object.keys(this.formDataSave.form)[currentElement.parentIndex[0]]][0])[currentElement.parentIndex[1]]][currentElement.parentIndex[2]].value;
      this.formDataSave.form[this.sectionName][subsectionIndex][Object.keys(this.formDataSave.form[this.sectionName][subsectionIndex])[subsectionKey]][index].value = undefined;
      parentElement.value = undefined;
    }
    this.isGreaterThanDependencyOnPress(index, subsectionKey, subsectionIndex);
  }
  clearSelections(fileIndex, subsectionIndex, subsectionKey, index, element){
    // if(this.formDataSave.form[this.sectionName][subsectionIndex][subsectionKey][index]['fileValue'][fileIndex].isAttached)
      this.formDataSave.form[this.sectionName][subsectionIndex][subsectionKey][index]['fileValue'][fileIndex].isDeleted = true;
      this.formDataSave.form[this.sectionName][subsectionIndex][subsectionKey][index]['fileValue'][fileIndex].base64 = null;
    // else
    //   this.formDataSave.form[this.sectionName][subsectionIndex][subsectionKey][index]['fileValue'].splice(fileIndex, 1);
    $(element.target).parent().parent().find('input').val("");
  }
  preventNegative(e){
    if(!((e.keyCode > 95 && e.keyCode < 106)
    || (e.keyCode > 47 && e.keyCode < 58) 
    || e.keyCode == 8)) {
      return false;
  }
  }
  onFileChange(event, key, i, j, k) {
    var codedFiles = [];
    if(event.target.files && event.target.files.length > 0) {
      let files = event.target.files;
      let totalFileSize = 0;
      var subsectionJson = this.formDataSave.form[this.sectionName][k];
      subsectionJson[Object.keys(subsectionJson)[j]][i].wrongFileExtensions = false;
      subsectionJson[Object.keys(subsectionJson)[j]][i].duplicateFilesDetected = false;
      var previousFileValue = subsectionJson[Object.keys(subsectionJson)[j]][i].fileValue;
      for (let m = 0; m < files.length; m++) {
        for (let j = 0; j < previousFileValue.length; j++) {
          if(files[m] && files[m].name == previousFileValue[j].fileName && !previousFileValue[j].isDeleted){
            files = [];
            
          }
          
        }
        
      }
      for(let b=0; b<previousFileValue.length; b++){
        if(!previousFileValue[b].isDeleted)
        totalFileSize += Math.round(previousFileValue[b].fileSize/1024);
      }
      for(let a=0; a<files.length; a++){
        totalFileSize += Math.round(files[a].size/1024)
      }
      if(files.length){
        if(totalFileSize < 1024 * 10){
          for(let a=0; a<files.length; a++){
            let file = files[a]
            let extension = file.name.split('.')[file.name.split('.').length-1];
            if(extension.toLowerCase() == 'pdf' || extension.toLowerCase() == 'doc' || extension.toLowerCase() == 'docx' || extension.toLowerCase() == 'xls' || extension.toLowerCase() == 'xlsx'){
              let reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                
                codedFiles.push({'description': reader.result.split(',')[1], groupName: file.name})
                
                // this.saveCodedFiles(codedFiles, i, j, k);
                var subsectionJson = this.formDataSave.form[this.sectionName][k];
                subsectionJson[Object.keys(subsectionJson)[j]][i].fileValue.push({
                  'base64': reader.result.split(',')[1], 
                  'fileName': file.name, 
                  'fileSize': file.size,
                  'typeId': null,
                  'isDeleted': false,
                  'submissionId': this.formFieldService.submissionId,
                  'isAttached': false,
                  'columnName': subsectionJson[Object.keys(subsectionJson)[j]][i].columnName,
                  'monthRange': this.formDataSave.periodreferenceName,
                  'yearRange': this.formDataSave.yearName,
                  'typeName': '',
                  'attachmentId': null
                })
                subsectionJson[Object.keys(subsectionJson)[j]][i].fileSizeExceeds = false;
              }
              // console.log(Math.round(file.size/1024) +'KB');
              
            }
            else{
              subsectionJson[Object.keys(subsectionJson)[j]][i].wrongFileExtensions = true;
              subsectionJson[Object.keys(subsectionJson)[j]][i].fileSizeExceeds = false;
            }
          }
          $(event.target).parent().parent().find('input').val("");
        }
        else{
          var subsectionJson = this.formDataSave.form[this.sectionName][k];
          subsectionJson[Object.keys(subsectionJson)[j]][i].fileSizeExceeds = true;
          $(event.target).parent().parent().find('input').val("");
        }  
      }
      else{
        subsectionJson[Object.keys(subsectionJson)[j]][i].duplicateFilesDetected = true;
        $(event.target).parent().parent().find('input').val("");
      }
    }
    
  }
  saveFormData(){
    this.formDataSave.submitFormData(false);
  }
  submitForm(){
    console.log(this.formFields);
  }
  previousSection(){
    this.router.navigateByUrl('/data-entry');
  }
  saveDataProceed(){
    this.formDataSave.saveData(this.sectionName, this.formSubSections);
    this.router.navigateByUrl('/data-entry-training');
  }

  selectDropdown(selectedOption, subsectionIndex, subsectionKey, index){
    this.formDataSave.form[this.sectionName][subsectionIndex][subsectionKey][index].value = selectedOption.value;
    // this.formFieldsAll["Awareness/ Outreach Activities"].value = selectedOption.value;
    this.formDataSave.form[this.sectionName][subsectionIndex][subsectionKey][index].optionValue = selectedOption;
    this.formDataSave.clearDependentMembers(this.sectionName, subsectionIndex, subsectionKey, index)
  }

  labelHighlightOnFocus(){
    setTimeout(function(){
      $("input, textarea, .select-dropdown").focus(function() {
        $(this).closest(".input-holder").parent().find("> label").css({"color": "#4285F4"})
        
      })
      $("input, textarea, .select-dropdown").blur(function(){
        $(this).closest(".input-holder").parent().find("> label").css({"color": "#333"})
      })
    }, 500)
    
  }

}

