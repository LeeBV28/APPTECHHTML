# Gét element methods
**Get ID, ClassName, TagName, Css Selecter, HTML Collection, Atribu**
>ID:  
`   document.getElementById('heading')  ` trả ra một object là thẻ được seclection

>ClassName: Trả về một HTMLColection giống như một mảng  
`   document.getElementsByClassName('heading') `

>Tagname: giống như class name nhưng thay bằn thẻ   
`   document.getElementsByTagName('h1') `

>CSS selecter: Giống như thẻ chọn trong css. trả về một object như get ID. Nếu có nhiều selecter giống nhau chỉ trả về thẻ đầu tiên  
`   document.querySelector('.heading')  `

>CSS SelecterAll: Trả về một html collection và tất cả selecter có trong file  
`document.querySelectorAll('.heading')`

>>HTML Colection: HTML colecter như là from, thẻ a, thẻ img, ...  
`document.forms` với forms là các HTML colecter 


# Dom Attribute:
**Có hai loại là get và sét tức là gán sáng HTML và lấy ra từ html**  
**Có 2 kiểu attribute là hợp lệ và không hợp lệ**  
> attribute hợp lệ: là attribute có sãn của HTML như title, class, id:   
    vd: Ta lấy được thông tin thẻ h1 như sau  
`    var headingElement = document.querySelector('h1');`  
    -> thêm attribute:  
`    headingElement.className = 'heading';  `  
        + className là attribute hợp lệ. (id, title, class ... ) lưu ý thêm class cần truyền vào là className vì class trùng với một phương thức có sẵn của js  
        + heading: là tên của attribute;  
    
    -> Lấy ra thông tin attribute:  
`    console.log(headingElement.className)  `   
        + Trả ra tên của attributr class  

> Attribute không hợp lệ. Đây cũng áp dụng cho attribute hơp lệ dùng phương thức set|get Attribute()  
    vd: Ta lấy được thông tin thẻ h1 như sau  
`    var headingElement = document.querySelector('h1');`  
    -> thêm attribute:  
`    headingElement.setAttribute('data-1', 'heading')    `  
        + truyền cho phương thức setattribute 2 đối số  
        + data-1: là tên attribute  
        + heading: là giá trị atttribute   
        --> data-1="heading"  
    
    -> Lấy ra thông tin attribute:  
`   console.log(headingElement.getAttribute('data-1'))  `     
        + data-1: Tên attribute  


# innerText và textConten: Dùng để gét or sét text sang HTML  
    + innerText lấy ra những gì HTML hiển thị trong trình duyệt loại bỏ các thẻ đang ẩn không hiển thị hoặc nội dung trong các thẻ khác  
    + textConten: Lấy ra hết những gì thấy trong HTML chỉ bỏ qua name tag của thẻ  
> Dùng giống như acttribute hợp lệ  
    vd có thẻ h1:   
`    var headingElement = document.querySelector('h1');`  
    + set:   
`    headingElement.innerText = 'New heading'   `  
    + Get:  
`    console.log(headingElement.innerText)       `  
**Tương Tự với textConten**  

# Dom CSS: Inline chỉ thực hiện được khi lấy ra element nodes  
get 1 div nhu sau:  
`    var divElement = document.querySelector('div');    `  
    + Thêm từng thuộc tính:   
`    divElement.style.width = '100px';`  
`    divElement.style.height = '200px';`  
`    divElement.style.backgroundColor = 'red';` -> với thuộc tính có - bỏ - chuyển chữ tiếp theo thành in hoa Color  
    + Thêm đồng thời nhiều thuộc tính:   
Lợi dụng funtion `Object.assign(divElement.style, {});`   
        + Đối số thứ nhất là thẻ được get.style     
        + Đối số thứ 2 là một funtion truyền vào các thuộc tính cần thêm:     
`            Object.assign(divElement.style, {           `  
`            width: '100px',                             `   
`            height: '200px',                             `  
`            backgroundColor: 'red',                     `  
`           });                                             `  

# ClassList: Cho phép thêm sửa xoá một class
    + Add: thêm class  
    + Remove: Xoá class  
    + Contains: Kiểm tra class trả về true or false
    + toggle: kiểm tra class nếu có thì xoá đi nếu chưa có thì thêm vào
`    var boxClass = document.querySelector('.box');      `  
`    boxClass.classList.add('box-1', 'box-2')        `  
        + add là kiểu có thể là remove, contains, .... và truyền vào đối số là tên class ở dạng string. có thể thêm nhiều các nhau bằng dấu ,   