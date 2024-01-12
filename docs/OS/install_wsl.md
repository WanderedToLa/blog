---
sidebar_position: 1
---

# WSL2 + VSCode 기반 리눅스 개발환경 설정

1. 설정 > 시스템 > 정보에서 확인

   - Windows 10
   - x64, version1903 이상, 빌드18362 이상
   - 설정 > `기능` 검색 > Windows기능 켜기 > `Linux용 Windows 하위시스템` & `VM 플랫폼` 체크

2. Linux 커널 업데이트

   - [x64 머신용 최신 WSL2 Linux 커널 업데이트 패키지](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

3. install Linux LTS

   - MS store > Ubuntu
   - 계정 설정

4. WSL2 기본버전 설정

   - `PowerShell`관리자 권한 실행

   ```
   wsl --set-default-version 2
   ```

   ```
   wsl -l -v
   ```

5. Ubuntu에서 GNU 툴체인 설치

   ```
   sudo apt-get update

   sudo apt-get install build-essential gdb

   gcc --version
   g++ --version
   gdb --version
   ```

## VSCode

- extentions > `Remote - WSL`
- 좌측하단 > 원격 창 열기 까지 하면 설정 끝
