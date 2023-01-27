export interface DataRoadMapChiTiet {
  dataRoadMap: DataRoadMap[];
  dataTask:    { [key: string]: DataTask };
}

export interface DataRoadMap {
  id:              number;
  stt:             number;
  maRoadMapDetail: number;
  maSkill:         string;
  ngayHoc:         Date;
  taiLieu:         BaiTap;
  baiTap:          BaiTap;
  videoXemTruoc:   BaiTap;
  videoXemLai:     BaiTap;
  tracNghiem:      BaiTap;
  tracNghiemExtra: BaiTap;
  taiLieuDocThem:  BaiTap;
  baiTapLamThem:   BaiTap;
  capstone:        BaiTap;
  cauHoiKhoKhan:   BaiTap;
}

export interface BaiTap {
  isEdit:         boolean;
  danhSachBaiHoc: DanhSachBaiHoc[];
}

export interface DanhSachBaiHoc {
  id:           number;
  tieuDe:       string;
  noiDung:      string;
  ghiChu:       null | string;
  vimeo:        null | string;
  maLoaiBaiHoc: MaLoaiBaiHoc;
  hanNop:       number;
  ngayTao:      Date;
  ngayHetHan:   Date;
  moTa:         null | string;
}

export enum MaLoaiBaiHoc {
  Capstone = "CAPSTONE",
  File = "FILE",
  ProjectExtra = "PROJECT_EXTRA",
  Quiz = "QUIZ",
  QuizWrite = "QUIZ_WRITE",
  TaiLieuExtra = "TAI_LIEU_EXTRA",
  VideoXemTruoc = "VIDEO_XEM_TRUOC",
}

export interface DataTask {
  danhSachVideoXemTruoc: { [key: string]: DanhSach };
  danhSachTracNghiem:    { [key: string]: DanhSach };
  danhSachBaiTap:        { [key: string]: DanhSach };
  danhSachTaiLieuExtra:  { [key: string]: DanhSach };
  danhSachBaiTapExtra:   { [key: string]: DanhSach };
  danhSachCapstone:      { [key: string]: DanhSach };
}

export interface DanhSach {
  idBaiHoc:      number;
  tieuDe:        string;
  isHoanThanh:   boolean;
  ngayHoanThanh: Date;
}
