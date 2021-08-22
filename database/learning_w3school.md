# **Tạo cơ sở dữ liệu**  
## Tạo cơ sở dữ liệu (create database)
    create database database_name;
> Cơ sở dữ liệu đang tạo cần trọc thẳng vào master.  

## Xoá cơ sở dữ liệu (drop database)
    drop database database_nam;
## Sao lưu database (backuo database)
    backup database database_name to disk = 'Đường dẫn tập tin';
    Ví Dụ:    
    BACKUP DATABASE testDB TO DISK = 'D:\backups\testDB.bak';
**Tạo dự phòng SQL với câu lệnh khách biệt**  
~~~    
    backup database database_Name to disk = 'Đường dẫn sao lưu' with differential;
~~~
## Tạo bảng (create table)
    CREATE TABLE table_name (
        column1 datatype,
        column2 datatype,
        column3 datatype,
        ....
    );
> column1, 2, 3 là tên các cột. datatype là kiểu dữ liệu cho cột đó (int, char, varchar, decimal, date, ...)  

**Tạo bảng mới từ bảng khác đã có**
~~~
CREATE TABLE new_table_name AS
SELECT column1, column2,...
FROM existing_table_name
WHERE ....;
~~~
> New_table_name là bảng mới được tạo từ các cột 1, 2 của bảng existing_table_name.

## Xoá bảng (drop table)
    drop table table_name;
>xoá bảng có thên table_name.

**Xoá dữ liệu trong bảng nhưng không xoá chính bảng đó**
~~~
truncate table table_name;
~~~
> truncate để xoá dữ liệu trong bảng mà vẫn giữ nguyên cấu trúc (các cột) của bảng.

## Alter table (chỉnh sửa bảng)
+ lệnh `alter table` dùng để thêm, xoá, sửa các cột trong bảng hiện có.
+ lệnh `alter table` cũng được dùng để thêm và bỏ các ràng buộc khác nhau trên một bảng hiện có.
  
**Thêm cột**
~~~
alter table table_name add column_name datatype;
~~~
>thêm cột column_name vào bảng table_name. datatype là kiểu giữ liệu của bảng mới thêm vào.

**Xoá Cột**  
~~~
ALTER TABLE table_name DROP COLUMN column_name;
~~~
**Thay đổi kiểu dữ liệu của 1 cột**
~~~
alter table table_name alter column column_name datatype_new;
~~~
> table_name và column_name là tên bảng và tên cột cần sét datatype mới.
> datatype_new là kiểu dữ liệu mới của cột có sẵn.

## SQL Constraints (các ràng buộc)
    CREATE TABLE table_name (
        column1 datatype constraint,
        column2 datatype constraint,
        column3 datatype constraint,
        ....
    );
>Các ràng buộc được viết sau kiểu dữ liệu khi tạo bảng. 

**Các khoá ngoài có thể thêm sửa xoá**
    
    alter table table_name
    add constraint name_constraint propertie_constraint;
>Thêm constraint  
    
    alter table table_name
    drop constraint name_constraint;
>Xoá constraint
+ Các ràng buộc dùng để chỉ định các quy tắc cho dữ liệu trong bảng
+ Ràng buộc có thể ở mức cột hoặc mức bảng. Ràng buộc mức cột áp dụng cho từng cột, ràng buộc mức bảng áp dụng cho cả bảng.
+ Một số ràng buộc thường được sử dụng:
  + ``not null``: Đảm bảo rằng một cột không được để trống giá trị.  
    ~~~
    CREATE TABLE Table_name (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255) NOT NULL,
        Age int
    );
    ~~~
  + ``unique``: Các giá trị nhập vào phải là khác nhau (không được trùng lặp).
    ~~~
    CREATE TABLE Table_name (
        ID int NOT NULL UNIQUE,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int
    );
    ~~~
  + ``primary key``: Chỉ định cột là khoá chính và mặc định không được để trống cũng không được trùng lặp.
  + ``foreign key``: Chỉ định khoá ngoài của cột. Ngăn chặn các hành động phá huỷ liên kết giữ các bảng.
  + ``check``: Check các điều kiện khác viết sau check.
  + ``default``: Đặt giá trị mặc định cho một cột nếu không có giá trị được nhập vào.
  + ``create index``: Tạo chỉ mục để tạo và lấy dữ liệu từ cơ sở dữ liệu nhanh chóng.<hr>

    **Primary key**  

        CREATE TABLE Table_name (
            ID int NOT NULL PRIMARY KEY,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int
        );
    *Tạo 2 khoá chính bằng cách chỉ định contranint*

        CREATE TABLE table_name (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int,
            CONSTRAINT PK_table_name PRIMARY KEY (ID,LastName)
        );    
    > bằng cách chỉ định contraint cho 2 cột id và lastName.

    *Nếu bảng đã tạo và cần thêm khoá chính thì sử dụng alter*

        alter table table_name 
        add primary key(culumn_name);
    >add 1 khoá chính cho cột column_name trong bảng table_name đã được tạo sẵn 
    
        ALTER TABLE Persons
        ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);
    > sử dụng contraint để thêm nhiều khoá chính cho các cột. vd là bảng Persons với khoá cho cột ID và LastName. PK_Person là tên constraint.  

    *Xoá constraint*

        ALTER TABLE Persons
        DROP CONSTRAINT PK_Person;
    >xoá tất cả primary key của bảng persons.

    **Foreign Key**
    
    *Từ khoá*
        
        CREATE TABLE Orders (
            OrderID int PRIMARY KEY,
            OrderNumber int NOT NULL,
            PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
        );
    >foreign key references chỏ đến bảng Persons và cột PersonID. Với cột PersonID là khoá chính của bảng Persons như vậy cột vừa tạo ở bảng trên là khoá ngoài.  
    >giá trị nhập vào cột này phải là giá trị đã có ở cột PersonID trong bảng Persons.

    *Tạo khoá ngoài cho bảng đã có sẵn*
        
        alter table table_name
        add foreign key(column_name) references table_thamchieu(column_thamchieu);
    >thêm khoá chính một cột đã có sẵn từ bảng tham chiếu  
    cột được tham chiếu đến phải là khoá chính của bảng tham chiếu.

    *Xoá khoá ngoài*

        alter table table_name
        drop constraint _foreign_key_name;
    >check name key ở phần keys của table.

    **Check**

        CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int CHECK (Age>=18)
        );
    >check cột age nhập vào data lơn hơn hoặc bằng 18.

    *Thêm nhiều check cùng lúc*

        CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int,
            City varchar(255),
            CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
        );
    >Đồng thời thêm check cho age và City.

    *Thêm check vào bảng đã tạo sẵn*
    
        alter table table_name
        add check (column_name+điều kiện)
    >Thêm một check cho cột mong muốn trong bảng đã có sẵn

        alter table table_name
        add constraint constraint_name(CKH_Name) check (column1>=10 and column2=30 and ...)
    >Thêm nhiều check cùng một lúc trong cặp ()  
    Constraint_name là tên constraint thường đặt CHK thể hiện đây là constraint check

    *xoá check*

        alter table table_name
        drop constraint constraint_name;

    **Default (Giá trị mặc định)**

        CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int,
            City varchar(255) DEFAULT 'Sandnes'
        );
    >Cột city sẽ có giá trị mặc đinh là Sandnes nếu như không truyền vào giá trị cho nó.

    *Default còn có thể sử dụng giá trị mặc định của hệ thống*

        CREATE TABLE Orders (
            ID int NOT NULL,
            OrderNumber int NOT NULL,
            OrderDate date DEFAULT GETDATE()
        );
    >Cột OrderData sẽ lấy giá trị ngày tháng tự động của hệ thống nếu như không truyền vào giá trị.

    *Cũng giống như các constraint khác. Default cũng được sửa, xoá khi bảng đã được tạo từ trước*

        alter table table_name
        add constraint constraint_name default 'value_default' for column_name;
    >Thêm một giá trị mặc định cho cột bất kỳ.
        
        alter table table_name
        drop constraint constraint_name;
## SQL INDEX (chỉ mục)
+ Chỉ mục được dùng để truy vấn dữ liệu nhanh hơn từ cơ sở dữ liệu
+ Người dùng không thể thấy chỉ mục. chúng chỉ được dùng để tăng tốc độ tìm kiếm, truy vấn.
+ Cập nhật bảng có chỉ mục tốn nhiều thời gian hơn so với bảng không. Do vậy nên cân nhắc khi tạo chỉ mục.

**Tạo chỉ mục**

    CREATE INDEX index_name
    ON table_name (column1, column2, ...);
>Tạo một chỉ mục

    CREATE UNIQUE INDEX index_name
    ON table_name (column1, column2, ...);
>Tạo một chỉ mục duy nhất. 

**Xoá chỉ mục**

    drop index index_name on table_name; 
    hoặc
    drop index table_name.index_name;
>Có 2 cách để xoá index.

## Auto increment (tự động tăng)
+ Thường được sử dụng cho khoá chính với kiểu dữ liệu là int.
~~~
CREATE TABLE Persons (
    Personid int IDENTITY(1,1) PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);
~~~ 
>identity chỉ định giá trị tự động tăn, giá trị trong () chỉ thị tăng từ 1 và mỗi lần tăng lên 1 đơn vị. có thể thay đổi giá trị trong ngoặc.  
VD: identity(10,5) bắt đầu từ 10 mỗi lần sau tăng 5 đơn vị.

## SQL Date types (các kiểu dữ liệu ngày)
+ date được thêm với định dạng: 
    
        date: yyyy-mm-dd
        date time: yyyy-mm-dd hh:mi:ss

## SQL views 
    CREATE VIEW view_name AS
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
>Tạo mới một view với các cột được select nhất định và kèm theo điều kiện để lọc giá trị.

**Cập nhât view**

    CREATE OR REPLACE VIEW view_name AS
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
**Xoá View**

    DROP VIEW view_name;

***
<br>
<br>

# **Thao tác cơ sở dữ liệu** 
  

# **VD Có bảng tên Customers**
|CustomerID | CustomerName | ContactName | Address |	City |	PostalCode | Country |
|:-------:|:------|:-------|:-------|:------|:-------|:-------|
| 1 | Alfreds | Futterkiste | Maria Anders |	Obere Str. 57 |	Berlin |	12209 |	Germany |
| 2 | Ana Trujillo | Emparedados y helados | Ana Trujillo |	Avda. de la Constitución 2222 |	México D.F. | 05021 | Mexico |
| 3 | Antonio Moreno Taquería |	Antonio Moreno | Mataderos 2312 | México D.F. |	05023 |	Mexico |
| 4 | Around the Horn |	Thomas Hardy | 120 Hanover Sq. | London | WA1 1DP |	UK |
| 5 | Berglunds snabbköp | Christina Berglund |	Berguvsvägen 8 | Luleå | S-958 22 |	Sweden |

# **Select**
### **Cú pháp**

    SELECT column1, column2, ... FROM table_name;
> column1, column 2 là các cột các nhau bẳng dấu "," nếu muốn chọn cả bảng sử dụng "*".
    
    select * from table_name;
>Sử dụng * để chọn ra tất cả các giá trị của bảng chỉ định.
### **Select distinct - Lựa chọn giá trị không trùng nhau**

    select distinct Column from table_name;
> Column là tên cột cần chọn, table_name là tên bảng.

Kết hợp count để đếm số hàng không trùng nhau trong một cột

    select count(distinct country) from Customers;
> Từ bảng Customers đếm giá trị không trùng nhau trong cột country.

<br>

# **Mệnh đề where**
+ Mệnh đề where được sử dụng để lọc các bản ghi.
+ Nó được sử dụng để trích xuất những bản ghi đáp ứng một điều kiện nào đó.
~~~
SELECT column1, column2, ...
FROM table_name
WHERE condition;
~~~
>Mệnh đê where không chỉ được sử dụng trong lệnh select. Nó còn được sử dụng trong câu lệnh update, delete,...

**Các toán tử được sử dụng trong mệnh đề where**
+ `=`: Toán tử bằng
+ `>`, `<`: Lớn hơn, nhỏ hơn
+ `>=`,`<=`: Lớn hơn hoặc bằng, nhỏ hơn hoặc bằng
+ `!=`: Không bằng. một sô sql được sử dụng `<>`.
+ `between`: Trong khoảng(trong một phạm vi) VD: 

        SELECT * FROM Products
        WHERE Price BETWEEN 50 AND 60;
        Lọc theo cột price có giá trị trong khoảng 50 đến 60.
+ `like`: Tìm kiếm một mẫu. thường được dùng với text vd:

        SELECT * FROM Customers
        WHERE City LIKE 's%';
        chọn bảng customers lọc theo các giá trị ở cột city bắt đầu bằng chứ S
+ `IN`: Lọc ra nhiều giá trị mong muốn

        SELECT * FROM Customers
        WHERE City IN ('Paris','London');
        Lọc theo cột city có các giá trị paris và london.
**Toán tử and, or, not (và, hoặc, không phải)**
    
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition1 AND condition2 AND condition3 ...;
>and kết hợp nhiều điều kiện

    SELECT column1, column2, ...
    FROM table_name
    WHERE condition1 OR condition2 OR condition3 ...;
>or chỉ cần 1 trong các điều kiện đúng

    SELECT column1, column2, ...
    FROM table_name
    WHERE NOT condition;
>not không phải là điều kiện

<br>

# **Order by keyword (sắp xếp)**
+ Từ khoá order by dùng để sắp xếp tập hợp kết quả theo thứ tự tăng dần or giảm dần.

        SELECT column1, column2, ...
        FROM table_name
        ORDER BY column1, column2, ... ASC|DESC;
>Ta dùng ASC hoặc desc. asc mặc định được sắp xếp tăng dần. Ngược lại desc sắp xếp giảm dần(từ cao xuống thấp, Từ mới đến cũ)

<br>

# **Câu lệnh insert into (lện chèn)**
    INSERT INTO table_name (column1, column2, column3, ...)
    VALUES (value1, value2, value3, ...);
>Lệnh thường dùng để trèn các giá trị vào bảng table_name với các cột được chỉ định và value theo thứ tự cột.

    INSERT INTO table_name
    VALUES (value1, value2, value3, ...);
>Ngoài ra nếu chèn tất cả giá trị cho các cột trong bảng sử không cần khái báo cột.

<br>

# **Null value (trường có giá trị null)**
+ Không thể kiểm tra giá trị null bằng các toán tử so sánh như =, <,>,..
+ Thay vào đó phải sử dụng các toán tử riêng biệt `is null` và `is not null`.

        SELECT column_names
        FROM table_name
        WHERE column_name IS NULL;
>Toán tử is null chỉ ra các giá trị null

        SELECT column_names
        FROM table_name
        WHERE column_name IS NOT NULL;
>Toán tử is not null chỉ ra các giá trị không null.

<br>

# **Câu lệnh update (cập nhập)**
**Câu lệnh update được sử dụng để cập nhật các giá trị hiện có trong bảng**

    UPDATE table_name
    SET column1 = value1, column2 = value2, ...
    WHERE condition;
>Mệnh đề where chỉ định các bản ghi nào cần cập nhật. Nếu không có where tất cả các bản ghi trong bảng sẽ được cập nhật.  
Hết sức lưu ý và cần thận khi sử dụng.

<br>

# **Câu lệnh delete(xoá bản ghi)**
**Câu lệnh delete được dùng để xoá các bản ghi hiện có trong bảng.**
    
    DELETE FROM table_name WHERE condition;
>Tượng tự như update where được dung để chỉ định bản ghi nào được xoá. nếu không có where tất cả sẽ bị xoá.

    DELETE FROM table_name;
>Lệnh trên xoá tất cả dữ liệu trong bảng mà vẫn giữ nguyên cấu chúc bảng.

<br> 

# **Select top (chỉ định số bản ghi trả về)**
**Select top được dùng để chỉ định số bản ghi được trả về**

    SELECT TOP number|percent 
    column_name FROM table_name
    WHERE condition;
>Number khai báo số lượng cột trả về percent (phần trăm) theo cột nhất định hoặc bảng.

**Ví Dụ**

    select top 3 * from table_name;
>Trả về 3 cột từ bảng chỉ định.

    select top 50 percent * from table_name;
>Trả về 50% cột từ bảng chỉ định.

<br>

# **Hàm min() và Max()**
**Min và Max trả về giá trị lớn nhất hoặc nhở nhất trong một cột**

    SELECT MIN(column_name)|MAX(column_name)
    FROM table_name
    WHERE condition;

<br>

# **Hàm COUNT(), AVG(), SUM()**
**COUNT( )**

    SELECT COUNT(column_name)
    FROM table_name
    WHERE condition;
>Trả về số hàng phù hợp với tiêu chí được chọn

**AVG( )**

    SELECT AVG(column_name)
    FROM table_name
    WHERE condition;
>Trả về giá trị trung bình của cột được chỉ định

**SUM( )**

    SELECT SUM(column_name)
    FROM table_name
    WHERE condition;
>Trả về tổng giá trị của cột được chỉ định

<br> 

# **Cú pháp Like**
**Cú pháp like được sử dụng trong mệnh đề where để tìm kiếm một mẫu được chỉ định trong cột**  
**Có hai ký tự đại diện thường được sử dụng cùng với toán tử like**  
+ Dấu phần trăm (%) đại diện cho không, một hoặc nhiều ký tự.
+ Dấu gạch dưới (_) đại diện cho một, một ký tự.
~~~
SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;
~~~
>Có thể kết hợp bất kỳ số lượng điều kiện nào bằng cách sử dụng toán tử and, or

**Một số ví dụ hiển thị toán tử like với đại diện % và _**
+ `'a%'` : Tìm kiếm bất kỳ giá trị nào bắt đầu bằng a.
+ `'%a'` : Tìm kiếm bất kỳ giá trị nào kết thúc bằng a.
+ `'%a%'` : Tìm kiếm bất kỳ giá trị nào có chứa a.
+ `'_r%'` : Tìm kiếm bất kỳ giá trị nào có r ở vị trí thứ 2.
+ `'a_%'` : Tìm kiếm bất kỳ giá trị nào có bắt đầu bằng a và có ít nhất 2 giá trị.
+ `'a__%'` : bắt đầu bằng a và có ít nhất 3 giá trị.
+ `'a%o` : Bắt đầu bằng a và kết thúc bằng o.

<br>

# **Toán tử IN (in là kiểu viết rút gọn của or)**
    SELECT column_name(s)
    FROM table_name
    WHERE column_name IN (value1, value2, ...);
> in cũng có thể viết với một mệnh để để lựa chọn ra một thứ gì đó.

    SELECT column_name(s)
    FROM table_name
    WHERE column_name IN (SELECT STATEMENT);

# **Toán tử BETWEEN**
**Toán tử BETWEEN chọn các giá trị trong một phạm vi nhất định. Các giá trị có thể là số, văn bản hoặc ngày tháng**

    SELECT column_name(s)
    FROM table_name
    WHERE column_name BETWEEN value1 AND value2;
>BETWEEN bao gồm giá trị bắt đầu và kết thúc.

<br>

# **SQL Aliases (Bí danh)**
+ Bí danh dùng để đặt tên tạm thời cho một bảng hoặc một cột trong bảng.
+ Dùng để làm cho tên cột dễ đọc hơn 
+ Chỉ tồn tại trong khoảng thời gian của truy vấn đó. 
+ Được tạo bằng từ khoá AS
~~~
SELECT column_name AS alias_name
FROM table_name;
~~~
>Bí danh cho cột.
~~~
SELECT column_name(s)
FROM table_name AS alias_name;
~~~
>Bí danh cho bảng.

**Có thể sử dụng toàn tử + để nối các cột lại và add nó thành 1 tên duy nhất**

    select Column1, column2 + ', ' + Column3 as alias_name from table_name;
>Các giá trị của cột 2, cột 3 sẽ được nhóm lại trong một cột alias_name và cách nhau bằng dấu ','

<br>

# **JOIN (Kết hợp các bảng có liên quan**

    SELECT table_A.Column_A1, table_B.ColumnB1, ...|*
    FROM tableA
    SQL_join_types JOIN Table_B ON Cột quan hệ giữ a và b;

**Ví DỤ**

        SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
        FROM Orders
        INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
>Lọc ra các gí trị phù hợp từ gái trị sau on của 2 bảng

**INNER JOIN**

    SELECT column_name(s)
    FROM table1
    INNER JOIN table2
    ON table1.column_name = table2.column_name;
> INNER JOIN chọn tất cả các hàng từ cả hai bảng miễn là có sự trùng khớp giữa các cột. Nếu có bảng ghi trong bảng 1 không khớp trong bảng 2 những giá trị này sẽ không được hiển thị.

**LEFT JOIN**

    SELECT column_name(s)
    FROM table1
    LEFT JOIN table2
    ON table1.column_name = table2.column_name;
>
> Trả về tất cả các bản ghi từ bảng 1 (bảng bên trái), và các bản ghi phù hợp ở bảng 2(bảng bên phải). Vẫn trả về toàn bộ bảng 1 nếu bảng 2 không có giá trị phù hợp.

**RIGHT JOIN**

    SELECT column_name(s)
    FROM table1
    RIGHT JOIN table2
    ON table1.column_name = table2.column_name;
>Ngược lại với LEFT JOIN. trả về tất cả giá trị bảng 2 (bảng bên phải ) và lấy thêm giá trị phù hợp ở bảng bên trái (bảng 1)

**FULL JOIN**

    SELECT column_name(s)
    FROM table1
    FULL OUTER JOIN table2
    ON table1.column_name = table2.column_name
    WHERE condition;
> Trả về tất cả các giá trị ở cả 2 bảng cho dùng có trùng khớp hay không.

**SEFT JOIN**

    SELECT column_name(s)
    FROM table1 T1, table1 T2
    WHERE condition;
>T1, T2 là các bí danh. selt join thường được kết hợp với các điều kiện sau where để gộp thành một bảng mông muốn

    SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
    FROM Customers A, Customers B
    WHERE A.CustomerID <> B.CustomerID
    AND A.City = B.City
    ORDER BY A.City;
>VD seft join được sử dụng để lấy ra giá trị mong muốn và sắp sếp nó theo cột city

<br>

# **GROUP BY**

    SELECT column_name(s)
    FROM table_name
    WHERE condition
    GROUP BY column_name(s)
    ORDER BY column_name(s);

+ Nhóm các hàng cùng giá trị thành các hàng tóm tắt 
+ Group by thường được sử dụng với các hàm tổng hợp như count(), min(). MAX(), ...

<br>

# **HAVING**

    SELECT column_name(s)
    FROM table_name
    WHERE condition
    GROUP BY column_name(s)
    HAVING condition
    ORDER BY column_name(s);
+ Thay thế cho where sử dụng với các hàm và group by 

<br>

# **EXISTS toán tử exists**
+ Dùng để kiểm tra sự tồn tại của bản ghi trong một truy vấn con
+ Toán tử exists trả về true nếu truy vấn con trả về một hoặc nhiều bản ghi.
~~~
SELECT column_name(s)
FROM table_name
WHERE EXISTS
(SELECT column_name FROM table_name WHERE condition);
~~~
>Điều kiện được trả về trong cặp ngoặc, nếu là true thì lệnh mới thực hiện.

<br>

# **TOÁN Tử ANT VÀ ALL**
+ Toán tử **ANY** và **ALL** cho phép so sánh giữa một giá trị cột đơn và một loạt giá trị khác

**ANY**
~~~
SELECT column_name(s)
FROM table_name
WHERE column_name operator ANY
  (SELECT column_name
  FROM table_name
  WHERE condition);
~~~
>operator phải là một toán tử so sánh chuẩn (=, <>, !=, >, >=, <, or <=).

VD:





