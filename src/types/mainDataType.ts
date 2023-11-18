export interface IMainSlice {
  subHospitalIsSelected: boolean | null;
  user: IUser;
  menuItems: IMenu[];
  cityList: IComboBox[];
  countryList: IComboBox[];
  subHospiatlList: IComboBox[];
  permissions: IPermissions | null;
  staticDetailValues: IStaticDetailValues | null;
  mainMenuButton: boolean;
  selectedUserPath: string;
  isLoading: boolean;
  error: string;
  staticDetailValue: string;
}
export interface IAuth {
  userApplications: any[];
  isAuth: boolean | null;
  isLoading: boolean;
  isDataLoading: boolean;
  loginError: boolean;
}
export interface IUserApplications {
  code: number;
  id: number;
  name: string;
  type: number;
}
export interface IStatus {
  isLoading: boolean;
  errorMesage: string;
  feedbackList: IFeedbackItem[];
  snackbarStatus: SnackbarStatus;
}
export interface SnackbarStatus {
  open: boolean;
  status: boolean;
}
export interface IFeedbackItem {
  code: number;
  typeId: number;
  message: string;
  isVisible?: boolean;
}
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  hospitalName: string;
  hospitalId: string | number;
  subHospitalSelection: boolean;
}
export interface IUserListItem extends IUser {
  username: string;
  rowStatus: string;
  positionName: string;
}
export interface IMenu {
  id: number;
  name: string;
  visible?: boolean;
  subMenu?: IMenu[] | null;
  haveSub?: boolean;
  route?: string;
  imageUrl: string;
}
export interface ISubMenu {
  id: number;
  name: string;
  path: string;
}

//Permissions page type
export interface IRole {
  id: number;
  rowStatus: number;
  roleName: string;
  usageDuration: string;
}

export interface IRoleById {
  id?: number | null;
  name: string;
  hospitalId: any;
  applicationNameId: any;
  usageDuration: any;
  rowStatus: any;
}
export interface IUsersItem {
  id: number;
  rowStatus: number;
  userName: string;
  userIdentity: string;
  positionId: number;
  positionName: string;
}
export interface IPermissionItem {
  id: number;
  permissionCode: number;
  permissionName: string;
  screenModulId: number;
  modulName: string;
}
export interface IPermissionsTab {
  id: number;
  name: string;
  active: boolean;
  disabled: boolean;
}
export interface IHospital {
  id: number;
  hospitalName: string;
}
export interface IApplication {
  id: number;
  applicationName: string;
}
export interface IPosition {
  id: number;
  name: string;
}
export interface IComboBox {
  id: number;
  name: string;
}
export interface IUserTypes {
  id: number;
  name: string;
}
export interface IGroupModal {
  [key: string]: boolean;
}
export interface ISnackModal {
  open: boolean;
  status: boolean;
}
export interface IFeedBackModal {
  open: boolean;
  message: string;
}
export interface IUserInfo {
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
  firstName: string;
  lastName: string;
  fin: string;
  cityId: number | null;
  hospitalId: number | null;
  positionId: number | null;
  fatherName: string;
  rowStatus: number | null;
  limit: string;
}
export interface IUserApplications {
  applicationName: string;
  applicationId: number;
  userTypeId: number;
}
export interface ISelectedRoleRow {
  id: number;
  roleName: string;
  hospitalId?: string;
}
export interface ISelectedUserRow {
  id: number;
  userName: string;
}
export interface IPermissionsGroup {
  role: IRoleById;
  roleList: IRole[];
  permissionsInRole: IPermissionItem[];
  permissionsNotInRole: IPermissionItem[];
  roleInUserList: IUsersItem[];
  roleNotInUserList: IUsersItem[];
  groupModal: IGroupModal;
  selectedRoleRow: ISelectedRoleRow | null;
  isLoading: boolean;
  error: string;
}
export interface IPermissionsUsers {
  userInfo: IUserInfo | null;
  userApplicationsList: IUserApplications[];
  usersList: IUserListItem[];
  permissionsInUser: IPermissionItem[];
  permissionsNotInUser: IPermissionItem[];
  userInRoleList: IUsersItem[];
  userNotInRoleList: IUsersItem[];
  userModal: IGroupModal;
  changePasswordModal: boolean;
  selectedUserRow: ISelectedUserRow | null;
  newUserId: number | null;
  isLoading: boolean;
  error: string;
  snackModal: ISnackModal;
  feedbackModal: IFeedBackModal;
  // changePasswordError: string,
  // errorStatus: number | null,
}

export interface IPermissionsMain {
  userInfo: IUserInfo | null;
  hospitalList: IHospital[];
  userTypesList: IUserTypes[];
  applicationList: IApplication[];
  positionList: IPosition[];
  role: IRoleById;
  isLoading: boolean;
  error: string;
  activeTab: boolean;
}
export interface IColumn {
  [key: string]: string;
}
export interface ISectionPermissionsNotInUserData {
  columns: IColumn[];
  permissions: any[];
}
export interface IUserAllSectionPermissions {
  id: number;
  permissionDepartmentId: number;
  departmentName: string;
  departmentDetailId: number;
  name: string;
}

export interface ISectionPermissionsSlice {
  usersList: IUserListItem[];
  selectedUserRow: ISelectedUserRow | null;
  permissionDepartmentsComboList: any;
  firstTableSelectedOption: number | null;
  secondTableSelectedOption: number | null;
  sectionPermissionsNotInUserData: ISectionPermissionsNotInUserData;
  userAllSectionPermissionsList: IUserAllSectionPermissions[];
  isLoading: boolean;
  error: string;
}
export interface IPermissions {
  [key: string]: boolean;
}
export interface IStaticDetailValues {
  [key: string]: IStaticDetailValue;
}
export interface IStaticDetailValue {
  [key: string]: string;
}
export interface ITab {
  id: number;
  name: string;
  active: boolean;
  disabled?: boolean;
}
///=======================================registrationMainSlice
export interface IRegistrationMain {
  idCardTypes: IdCardType[];
  idCardTypePrefixes: IComboBox[];
  selectedIdCardType: number | null;
  registrationUserInfo: IRegistrationUserInfo;
  userAge: number;
  ageAndDayControl: number;
  searchUserPinInfo: IRegistrationUserInfo | null;
  patientAppealList: IPatientAppealItem[];
  patientAppealSelected: IPatientAppealItem | null;
  isLoading: boolean;
  error: string;
  errorModal: { open: boolean; message: any };
  mandatoryFieldsByIdCardType: any;
  appliedServicesToPatientList: IAppliedServicesToPatient[];
  appealFilesList: IPatientFiles[];
  modalsToggle: IGroupModal;
  selectedCashRegisterAmbulatory: number | null;
  selectedCashRegisterPaidReceipts: number | null;
  printPaidReceiptList: any[];
}
export interface IAppliedServicesToPatient {
  id: number;
  serviceContractCode: string;
  categoryName: string;
  serviceGroupName: string;
  serviceCount: number;
  basePrice: number;
  finalPrice: number;
  doctorName: string;
  sentDoctorName: string;
  anestDoctorName: string;
  packetRoutineName: string;
  subHospitalName: string;
  specialServiceHospitalName: string;
  userName: string;
  serviceCategoryId: number;
  serviceGroupTypeId: number;
  serviceApprove: number;
  serviceDate: string;
  paymentId: number;
  doctorSelectionMandatory: number;
  packetRoutinePayment: number;
  isDefaultEmployeeId: boolean;
  anesthesiologistDoctorId: number;
}
export interface IPatientAppealItem {
  appealApprove: number;
  hospitalDetailId?: number;
  hospitalId?: number;
  noServiceInput?: number;
  appealDate: string;
  appealTime: string;
  applicationName: string;
  applicationReasonDetailName: string;
  applicationReasonDetailId: number;
  organizationName: string;
  departmentName: string;
  professionName: string;
  doctor: string;
  sendDoctor: string;
  approveStatus: string;
  hospitalName: string;
  hospitalDetailName: string;
  insertedByName: string;
  applicationReasonId: number;
  mandatoryPayment: number;
  id: number;
  organizationId: number;
  professionCode: string;
  idReferralScreenActive: number;
  isSpecialDoctorRequired: number;
  employeeDetailId: number;
  sentEmployeeDetailId: number;
}
export interface IFindedPatient { }
export interface IPatientFiles {
  id: number;
  fileUrl: string | null;
  insertedBy: any;
  insertedDate: string;
  note: string | null;
}
export interface IPatientInfoSlice {
  modalsToggle: IGroupModal;
  socialStatuses: IComboBox[];
  jobList: IComboBox[];
  tsekReasons: IComboBox[];
  disabilityList: IComboBox[];
  familyDoctors: any[];
  tuberculosisDispensaries: any[];
  findedPatientList: IFindedPatient[];
  patientFiles: IPatientFiles[];
  isUsersNotFind: boolean;
  isLoading: boolean;
  error: string;
  controlFamDoctor: IGroupModal;
}
export interface IPaidReceiptDetails {
  approveName: string;
  categoryName: string;
  debtAmount: number;
  finalPrice: number;
  gppApprove: number;
  gppName: string;
  id: number;
  insertedBy: number;
  packetRoutineName: string;
  receiptPrice: number;
  refund: number;
  refundName: string;
  serviceApprove: number;
  serviceContractCode: string;
  serviceContractName: string;
  serviceDate: string;
  serviceGroupName: string;
  serviceId: number;
  appealDate: string;
  hospitalId: number;
  hospitalDetailId: number;
  hospitalName: string;
  hospitalDetailName: string;
}
export interface IPaidReceipts {
  appealId: number;
  appealType: number;
  applicationName: string;
  cashRegisterId: number;
  cashRegisterName: string;
  doctor: string;
  id: number;
  insertedBy: number;
  organizationName: string;
  paidDateTime: string;
  patientId: number;
  paymentKindId: number;
  paymentType: string;
  professionName: string;
  receiptNumber: number;
  appealDate: string;
  hospitalId: number;
  hospitalDetailId: number;
  hospitalName: string;
  hospitalDetailName: string;
  paymentTypeId: number;
  gppApprove: number;
}
export interface PaymentTypesList extends IComboBox {
  selected: boolean;
}
export interface IRegistrationModals {
  modalsToggle: IGroupModal;
  contractDetailsList: IContractDetails[];
  appliedTreatmentsList: IAppliedTreatments[];
  serviceGroupTypesList: IServiceGroupTypes[];
  serviceCategoriesList: IServiceCategories[];
  serviceDoctorsList: IServiceDoctors[];
  senderDoctorsList: ISenderDoctors[];
  anesthesiologistDoctorsList: IComboBox[];
  cashRegistersList: IComboBox[];
  paymentTypesList: PaymentTypesList[];
  isLoading: boolean;
  error: string;
}
export interface IReceiptServicesItem {
  id: number;
  appealId: number;
  serviceContractDetailId: number;
  serviceId: number;
  serviceCategoryId: number;
  serviceGroupTypeId: number;
  doctorId: number;
  sentDoctorId: number;
  insertedBy: number;
  serviceContractCode: string;
  serviceContractName: string;
  categoryName: string;
  serviceGroupName: string;
  serviceCount: number;
  basePrice: number;
  finalPrice: number;
  serviceDoctorName: string;
  sentDoctorName: string;
  insertedDate: string;
}
export interface ISenderDoctors {
  id: number;
  hospitalId: number;
  professionCode: number;
  doctor: string;
  surname: string;
  hospitalName: string;
  profession: string;
}
export interface IServiceDoctors {
  id: number;
  firstname: string;
  surname: string;
  patronymic: string;
  professionName: string;
}
export interface IServiceGroupTypes {
  serviceCode: number;
  serviceName: string;
}
export interface IServiceCategories {
  id: number;
  serviceCode: number;
  categoryName: string;
}
export interface IContractDetails {
  id: number;
  categoryName: string;
  defaultDoctor: string;
  serviceContractCode: string;
  serviceContractName: string;
  serviceGroupName: string;
  vatFreePrice: number;
  vatPrice: number;
  serviceCategoryId: number;
  serviceGroupTypeId: number;
  mandatoryPayment: number;
  organizationTypeId: number;
  doctorSelectionMandatory: number;
  doctorId: number;
  packetRoutineType: number;
  isFromAddedContractDetailsList?: boolean;
  // employeeDetailId: number;
  // packetRoutineName: string;
  // packetRoutineType: number;
}
export interface IAppliedTreatments {
  id: number;
  appealId: number;
  categoryName: string;
  serviceContractCode: string;
  serviceContractName: string;
}
export interface IdCardType extends IComboBox {
  prefixes: IComboBox[];
}
export interface ISearchTypes extends IComboBox {
  info?: string;
}
export interface IRegistrationUserInfo {
  familyDoctorId?: number;
  id?: number | null;
  patientNo?: number | null;
  pin?: string | null;
  firstname?: string | null;
  surname?: string | null;
  birthDate?: string | null;
  fatherPin?: string | null;
  patronymic?: string | null;
  motherName?: string | null;
  motherPin?: string | null;
  cityId?: number | null;
  countryId?: number | null;
  district?: number | null;
  genderId?: number | null;
  homePhone?: number | null;
  operatorPrefixId?: number | null;
  mobilePhone?: number | null;
  idCardNo?: number | null;
  idCardTypeId?: number | null;
  idCardTypeIdForm?: number | null;
  idCardTypePrefixId?: number | null;
  image?: string | null;
  imageUrl?: string | null;
  lastUpdatedDate?: string | null;
  registrationAddress?: string | null;
  residenceAddress?: string | null;
  patientSearchTypeId?: number | null;
  active?: boolean | null;
  deactivationReasonMessage?: string | null;
  btnDisable?: boolean;
  cityName?: string;
}
export interface ISearchIdCardBody {
  pin: any;
  searchType: number;
}
///=======================================newCheckupMainSlice
export interface INewCheckup {
  applicationReason?: any;
  selectedApplicationReason?: any;
  doctor?: any;
  hospitalBranch?: any;
  organization?: any;
  filterOrganizations?: any;
  profession?: any;
  subGroup?: any;
  isLoading?: boolean | null;
  newExaminationModal?: any;
  errorModal?: any;
  applicationReasonSubGroup?: any;
  doctorsGrid?: any;
  cluster?: any;
  snackModal?: boolean;
  checkAgeModal?: any;
  redirectDoctorInput?: any;
}

export interface IRedirectApp {
  isLoading?: boolean;
  redirectAppModal: boolean;
  paramData?: any;
  redirectData?: any;
  redirectAppGrid?: any;
}
export type errorType = {
  open: boolean;
  message: string;
};

export type AppealType = {
  id: number;
  idCardId: number;
  fin: string;
  patientNo: string;
  firstName: string;
  surname: string;
  patronymic: string;
  appealDate: string;
  applicationName: string;
  organizationName: string;
  professionName: string;
  doctor: string;
  insertedBy: string;
  detailHospitalName: string;
};
