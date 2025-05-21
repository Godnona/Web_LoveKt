let images = [
    "asset/1.jpg", "asset/2.jpg", "asset/3.jpg", "asset/4.jpg", "asset/5.jpg",
    "asset/6.jpg", "asset/7.jpg", "asset/8.jpg", "asset/9.jpg", "asset/10.jpg",
    "asset/11.jpg", "asset/12.jpg", "asset/13.jpg", "asset/14.jpg", "asset/1.jpg"
];

// Danh sách nội dung mô tả
let texts = [
    "Trạm 1: Trường học thân thiện",
    "Vậy là chúng mình cũng sắp được 3 tháng rồi đó e nhỉ.",
    "E đã làm cho a nhiều mà a vẫn chưa lm đc j cho e. Nay a mới nghĩ ra cái này nên làm luôn cho e nè",
    "Tuy nó vẫn sơ sài và thiếu nhiều nhưng a sẽ cải thiện nó hơn nha",
    "Cảm ơn e vì đã cùng đồng hành với a trong suốt chặng đường vừa qua",
    "Cảm ơn e vì đã tha thứ cho những sai lầm của a, vì đã mắng a thật nhiều nè",
    "A không hứa trước được điều gì nhưng a mong a sẽ là người đồng hành cùng e",
    "Cùng e đi khắp muôn nơi, cùng e sẻ chia niềm vui nỗi buồn nha",
    "Tuy có lúc chúng ta cảm thấy chán nhau nhưng đừng buông tay nhau nha",
    "Chỉ cần cho đối phương khoảng thời gian riêng 1 chút là đc rồi mà",
    "Dạo này e cũng bận nên a cũng không muốn phiền e vì sợ e quạo đó",
    "E cũng đến tháng nên chú ý sức khỏe nha. Ngủ sớm hơn và uống đủ nước ấm e nhe",
    "A mong a và e sẽ cùng nhau viết tiếp những câu chuyện của 2 chúng mình nha",
    "Chúng ta sẽ cùng nhau tạo thêm nhiều kỉ niệm đẹp nhé",
    "Mãi yêu e chengg đz. Yêu emmmmmmm nhìuuuuuuu"
];

let currentIndex = 0;
const carImg = document.getElementById("carImg");
const carDiv = document.querySelector(".car");
const gallery = document.getElementById("gallery");
const description = document.getElementById("description");

let moveStep = 0;

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        moveStep += 40;
        carDiv.style.transform = `translateX(${moveStep}px)`;

        // Thêm ảnh
        const link = document.createElement("a");
        link.href = images[currentIndex];
        link.target = "_blank";

        const newImg = document.createElement("img");
        newImg.src = images[currentIndex];

        link.appendChild(newImg);
        gallery.appendChild(link);

        // Thêm đoạn mô tả từ danh sách
        const p = document.createElement("p");
        p.textContent = texts[currentIndex];
        description.appendChild(p);
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        moveStep -= 40;
        carDiv.style.transform = `translateX(${moveStep}px)`;

        // Xóa ảnh cuối cùng
        if (gallery.lastChild) {
            gallery.removeChild(gallery.lastChild);
        }

        // Xóa đoạn mô tả cuối cùng
        if (description.lastChild) {
            description.removeChild(description.lastChild);
        }
    }
}