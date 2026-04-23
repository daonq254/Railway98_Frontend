class Person {
  // Khai báo thuộc tính
  private id: number;
  private name: string;
  private address: string;
  // contructor: hàm khởi tạo, được gọi khi tạo đối tượng từ class
  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  //   Có thể tạo thêm các method (hàm) trong class
  public showInfo(): void {
    console.log(`Thông tin Person: id=${this.id}, name=${this.name}, address=${this.address}`);
  }

  // Khai báo các hàm getter và setter để truy cập và thay đổi giá trị của thuộc tínhs
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public setId(id: number): void {
    this.id = id;
  }
  public setName(value: string) {
    this.name = value;
  }

  public setAddress(value: string) {
    this.address = value;
  }
}

var myName: String = "daonq";

export var number: number[] = [1, 2, 3, 4, 5];

// export { Person, myName, number };
export { Person };

export default myName;
