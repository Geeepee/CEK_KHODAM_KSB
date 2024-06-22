document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const birthDate = document.getElementById('birthDateInput').value;

    let pesan = [];

    if (!name) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Silakan masukkan nama Anda.'
        });
        return;
    }

    const khodams = [
        'GUPRON BENGKONG' , 'EKO BOGANG' ,'BINTANG SEKEN COIS' , 'NANDO BEDA AGAMA' , 'WINSA LURAH' ,
        'YEPE DARK SISTEM OSHI' ,'FARID FUAD' , 'RAPLI X TACIK' ,'RIO PERSIK' ,'SAYKOT KRAMIK' , 'ZIDAN CALON WOTI' ,
        'ACCEL DARKSYSTEM', 'BIMA BENGKEL' ,'MAC DONNY' ,'LARAS JOMOK' ,'MAD RECEH' , 'RUDI KUDA', 'RAITO BAKUL'
        ];

    if (birthDate) {
        const khodamIndex = parseInt(birthDate.replace(/-/g, '').slice(4, 8), 10) % khodams.length;
        const khodamTerdeteksi = khodams[khodamIndex];

        pesan = [
            `Ya, ${name}, menurut tanggal lahir Anda, di dalam dirimu ada khodam ${khodamTerdeteksi}.`,
            `Tidak, ${name}, menurut tanggal lahir Anda, tidak ada khodam di dalam dirimu.`,
            `Menurut tanggal lahir Anda, khodam ${khodamTerdeteksi} sedang bersemayam di dalam dirimu, ${name}.`,
            `Menurut tanggal lahir Anda, kamu bersih dari khodam, ${name}.`,
            `Menurut tanggal lahir Anda, khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, jaga baik-baik!`,
            `Khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, TAPI BOONG !`,
            `Tidak dapat mendeteksi khodam di dalam dirimu menurut tanggal lahir Anda, ${name}. Coba lagi.`
        ];
    } else {
        const randomIndex = Math.floor(Math.random() * khodams.length);
        const khodamTerdeteksi = khodams[randomIndex];

        pesan = [
            `Ya, ${name}, di dalam dirimu ada khodam ${khodamTerdeteksi}.`,
            `Tidak, ${name}, tidak ada khodam di dalam dirimu.`,
            `Khodam ${khodamTerdeteksi} sedang bersemayam di dalam dirimu, ${name}.`,
            `Kamu bersih dari khodam, ${name}.`,
            `Khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, jaga baik-baik!`,
            `Khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, TAPI BOONG !`,
            `Tidak dapat mendeteksi khodam di dalam dirimu, ${name}. Coba lagi.`
        ];
    }

    const randomPesanIndex = Math.floor(Math.random() * pesan.length);
    const hasilTeks = pesan[randomPesanIndex];

    Swal.fire({
        title: 'Hasil Cek Khodam',
        text: hasilTeks,
        icon: 'info'
    });
});
