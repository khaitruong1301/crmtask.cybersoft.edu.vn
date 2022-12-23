export interface RoadMapChiTiet {
  id: number;
  stt: number;
  maRoadMapDetail: number;
  maSkill: string;
  ngayHoc: Date;
  taiLieu: BaiTap;
  baiTap: BaiTap;
  videoXemTruoc: BaiTap;
  videoXemLai: BaiTap;
  tracNghiem: BaiTap;
  tracNghiemExtra: BaiTap;
  taiLieuDocThem: BaiTap;
  baiTapLamThem: BaiTap;
  capstone: BaiTap;
  cauHoiKhoKhan: BaiTap;
}

export interface BaiTap {
  isEdit: boolean;
  danhSachBaiHoc: DanhSachBaiHoc[];
}

export interface DanhSachBaiHoc {
  id: number;
  tieuDe: string;
  noiDung: string;
  ghiChu: null | string;
  vimeo: null | string;
  maLoaiBaiHoc: MaLoaiBaiHoc;
  hanNop: number;
  ngayTao: Date;
  ngayHetHan: Date;
  moTa: null;
}

export enum MaLoaiBaiHoc {
  File = "FILE",
  ProjectExtra = "PROJECT_EXTRA",
  QuizWrite = "QUIZ_WRITE",
  TaiLieuExtra = "TAI_LIEU_EXTRA",
  VideoXemTruoc = "VIDEO_XEM_TRUOC",
}