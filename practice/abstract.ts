// abstract vs interface
// 목적이 다름
// abstract -> 상속, 타입 명세  
// interface -> 구현, 기능 설계 명세
/**
 * 리눅스가 있을 때 리눅스 배포판인 레드햇과 데비안이 있고
 * 레드햇은 파일시스템만 지원하고 데비안은 파일시스템과 메모리 관리 기능을 제공한다.
 */
abstract class Linux {
    protected abstract _description?: string;

    constructor(protected _name: string, protected _version: number) {}

    abstract operation(): void; // OS가 컴퓨터를 켤 때

    turnOff() {
        console.log("turn off")
    }
}

class RedHat extends Linux implements IFileSystem {
    protected _description?: string;

    constructor(_name: string, _version: number, _description: string) {
        super(_name, _version);
        if (_description) {
            this._description = _description;
        }
    }
    write(): void {
        console.log("RedHat FileSystem Write");
    }
    open(): void {
        console.log("RedHat FileSystem open");
    }
    close(): void {
        console.log("RedHat FileSystem close");
    }

    operation(): void {
        console.log("RedHat");
    }
}

class Debian extends Linux implements IFileSystem, IMemory {
    protected _description?: string;

    constructor(_name: string, _version: number, _description: string) {
        super(_name, _version);
        if (_description) {
            this._description = _description;
        }
    }

    operation(): void {
        console.log("Debian");
    }

    write(): void {
        console.log("Debian FileSystem write");
    }
    open(): void {
        console.log("Debian FileSystem open");
    }
    close(): void {
        console.log("Debian FileSystem close");
    }
    fork(): void {
        console.log("Debian Memory fork");
    }
    clone(): void {
        console.log("Debian Memory clone");
    }
    kill(): void {
        console.log("Debian Memory kill");
    }
}

interface IFileSystem {
    write(): void;
    open(): void;
    close(): void;
}

interface IMemory {
    fork(): void;
    clone(): void;
    kill(): void;
  }