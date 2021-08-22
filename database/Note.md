# Thêm dữ liệu vào các bảng
    * Nguyên tắcc giống với thứ tự tạo bảng
        + thêm bảng không có khoá ngoài
        + Bảng ít khoá ngoài 

**CODE**
    insert into Tên bảng(các cột của bảng cách nhau bằng giấu ,)
	values(truyền giá trị tuong ứng với cột cách nhau bằng giấu , nếu là chuỗi cần viết nháy đơn '');\
    Các cột ID để tự động không cần thêm data
    có thể thêm nhiều cột value cách nhau bằng dấu ,
            (N'Máy In Samsung 450', N'Máy In Đang Ế', 100, N'Chiếc'),
			(N'Điện Thoại Nokia5670', N'Điện Thoại Đang Hót', 200, N'Chiếc');
    VD: 
    insert into KhachHang(TenKhachHang,ID,DienThoai,DiaChi)
	values('Nguyen Văn A',1,'0987654321','111 Nguyen Trai, Thanh Xuan, Ha Noi');

>lưu Ý: Nếu cần viết chữ có dấu cần thêm n trước kiểu dữ liệu của bảng đồng thời thêm data phải thêm n vào trước dữ liệu để conver sang
    VD: 
    + Khai báo khi tạo bảng: TenKhachHang nvarchar(255) not null,
    + Khi thêm data vào: N'Nguyễn Tiến Thành',
> Để ID tự tăng thêm identity(1,1) lúc khai báo data: Khi đó thêm data không cần thêm cột ID 
    + (1,1) 1 đầu tiên quy định số chạy bắt đầu từ 1,  1 thứ 2 quy định số đơn vị mỗi lần tăng (vd là mỗi lần tăng 1 đơn vị)

> Với date thêm theo định dạng:
    + date: yyyy-mm-dd
    + date time: yyyy-mm-dd h:i:s

> Khoá ngoài phải lấy giá trị đúng với bảng tham chiếu

> Cập nhật data: update ten_bang set Colum_sua = 'Noi_dung_sua' where điều_kiện_sửa1 AND|OR ĐK2;
    + VD: update KhachHang set DiaChi = N'So 8 Tôn Thất Thuyết' where ID = 2;
    + sửa nhiều điều kiện viết gắng bằng cách where colum_SS in (Các_giá_trị cách nhau bằng giấu ,)
        update KhahHang set DiaChi = N'22 Hàng Bài, Hoàn Kiếm, Hà Nội' where ID in (2,3,4,5,6);
    + Điều kiện nếu là chữ dùng dấu = nếu ss chuỗi dùng like;
        update HangHoa set MoTa = N'Máy Tính Tốt', Gia 1200 where TenSP like N'Máy Tính T450';
    + So sánh theo chuỗi ở đầu hoặc ở cuối: 
        update HangHoa set MoTa = N'Máy Tốt' where TenSp like N'Máy Tính%'; -- tên sp có chữ 'Máy Tính' ở đầu
        update HangHoa set MoTa = N'Máy Tốt' where TenSp like N'%T450'; -- tên sp có chữ 'T450' ở cuối
        update HangHoa set MoTa = N'Máy Tốt' where TenSp like N'%Tính%'; -- Tên SP có chữ 'Máy Tính' là được

> Xoá Data: delete from Tenbang where điều kiện (Điều kiện tương tự như update)
    + Dối với bảng có tham chiếu giá trị ra bảng khác thì giá trị tham chiếu đố không xoá được

> Truy vấn mở rộng; select colum_can_hien_thi from Ten_bang;
    + Lấy ra cột của bảng theo chỉ định sau select
        select TenKH,DiaChia,DienThoai from KhachHang; 
    + Có thể đổi thứ tự cột ở mặt hiển thị 
    + Đổi tên hiển thị của một cột thành tên khác: as (ID As MaKhachHang)
        select ID as MaKhachHang,TenKH,DiaChia,DienThoai from KhachHang;

>Lọc dữ liệu: select * from Ten_Bang diều_kien (kết hợp nhiều điều kiện như update data)
    select * from KhachHang where Gia > 500;
    + Kết hợp nhiều điều kiện: 
        select * from KhachHang where Gia > 500 AND TenSP like N'%Tính#';

> Thống kê: select    

# Nối bảng: select * from Bang_A inner||left||right join Bang_B on Bang_A.Khoa_Chinh = Bang_B.Khoa_ngoai
    + inner join: lấy phần chung của 2 bảng
    + left join: Lấy toàn bộ giữ liệu của bảng 1 nếu bảng 2 có data có thể ghép vào thì lấy nếu không để trống
    + right join: ngược lại left join lấy toàn bộ 2 nối 1: 
> lưu ý:
    + Nếu bảng 

# Update table (Sua cấu trúc bảng)
    + Thêm cột: alter table Ten_bang add Tên_cot kieudata;
    + Sua kieu data: alter table Ten_bang alter column TenBang KieuData_moi;
    + Xoa cot: alter table Ten_Bang drop column Tencot