import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


function AboutUs() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ marginTop: 24, textAlign: "center", marginBottom: 24 }}>Tentang Saya</Text>

      <View style={styles.container}>
        <Image source={require('../assets/img/merah.png')} style={styles.imageAbtus} />
      </View>
      <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}> Red Velvet </Text>
      <Text>impostor</Text>

      {/* Portfolio Section */}
      <View style={{ marginTop: 28, width: 300 }}>
        <Text style={{ textAlign: 'center' }}>Portfolio</Text>
        <View style={styles.portfolioDivider} />

        <View style={styles.portfolioLinks}>

          <View style={styles.portfolioLinksItem}>
            <View style={styles.portfolioIconContainer}>
              <Image source={require('../assets/img/ruba.png')} style={styles.portfolioIcon} />
            </View>
            <Text>Gitlab</Text>
          </View>

          <View style={styles.portfolioLinksItem}>
            <View style={styles.portfolioIconContainer}>
              <Image source={require('../assets/img/github.png')} style={styles.portfolioIcon} />
            </View>
            <Text>Github</Text>
          </View>

        </View>
      </View>

      {/* Contact Me Section */}

      <View style={{ marginTop: 100, width: 300 }}>

        <View>
          <Text style={{ textAlign: 'center' }}>Hubungi Saya</Text>
          <View style={styles.contactmeDivider} />

          <View style={styles.contactmeLinks}>
            <View style={styles.contactmeLinksItem}>
              <View style={styles.contactmeIconContainer}>
                <Image source={require('../assets/img/linkedin.png')} style={styles.contactmeIcon} />
              </View>
              <Text>@impostor</Text>
            </View>


            <View style={styles.contactmeLinksItem}>
              <View style={styles.igcontactmeIconContainer}>
                <Image source={require('../assets/img/ig.png')} style={styles.contactmeIcon} />
              </View>
              <Text>@galgadot</Text>
            </View>

            <View style={styles.contactmeLinksItem}>
              <View style={styles.emailcontactmeIconContainer}>
                <Image source={require('../assets/img/email.png')} style={styles.contactmeIcon}/>
              </View>
              <Text>Red@impostor.com</Text>
            </View>

          </View>
        </View>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    width: 120,
    height: 120,
    borderRadius: 180,
    overflow: "hidden",
    display: "flex",
    alignItems: "center"
  },

  imageAbtus: {
    flex: 1,
    resizeMode: "contain"
  },

  portfolioDivider: {
    width: '100%',
    height: 1,
    backgroundColor: 'black'
  },

  portfolioLinks: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  portfolioLinksItem: {
    // display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  portfolioIconContainer: {
    width: 40,
    height: 40,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  portfolioIcon: {
    flex: 1,
    resizeMode: "contain",
  },

  contactmeDivider: {
    width: '100%',
    height: 1,
    backgroundColor: 'black'
  },

  contactmeLinks: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap : "wrap"
  },

  contactmeLinksItem: {
    // display: "flex",
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 30
  },

  contactmeIconContainer: {
    width: 25,
    height: 25,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10
  },

  igcontactmeIconContainer: {
    width: 40,
    height: 40,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  emailcontactmeIconContainer: {
    width: 30,
    height: 30,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },

  contactmeIcon: {
    flex: 1,
    resizeMode: "contain",
  },

})

export default AboutUs;