# Granja-pro
App de ajuda a granja com todas funcionalidades 
name: granjapro
description: App de gestão suína
publish_to: "none"
version: 1.0.0+1

environment:
  sdk: ">=3.0.0 <4.0.0"

dependencies:
  flutter:
    sdk: flutter

flutter:
  uses-material-design: true
  name: granjapro
description: App de gestão suína
publish_to: "none"
version: 1.0.0+1

environment:
  sdk: ">=3.0.0 <4.0.0"

dependencies:
  flutter:
    sdk: flutter
  firebase_core: ^2.25.0
  firebase_auth: ^4.17.0
  cloud_firestore: ^4.15.0

flutter:
  uses-material-design: true
  import 'package:flutter/material.dart';

void main() {
  runApp(GranjaPro());
}

class GranjaPro extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text("GranjaPro")),
        body: Center(
          child: Text(
            "App funcionando 🚀",
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}
